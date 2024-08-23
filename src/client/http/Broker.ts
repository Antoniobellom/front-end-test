import { Broker } from "../../model/Broker";

const HOST = "https://placeholder-api.com/brokers";  // Usa la URL completa de la API

interface BrokerData<T> {
    data: T;
}

// Función que crea un cliente de Broker
export const createBrokerClient = (token: string = "") => {
    const host = `${HOST}`;

    const fetchData = async <T>(url: string, options?: RequestInit): Promise<BrokerData<T> | null> => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.error("Error: ", response.statusText);  // Añade logging para errores de red
                return null;
            }
            return response.json() as Promise<BrokerData<T>>;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    return {
        getByIdentifier: (identifier: string) => fetchData<Broker>(`${host}/${identifier}?keyName=identifier`),

        getById: (id: string) => fetchData<Broker>(`${host}/${id}`),

        getAll: () => {
            const headers = new Headers();
            headers.append("X-Api-Key", token);
            headers.append("Content-Type", "application/json");

            const requestOptions = { method: "GET", headers: headers };
            return fetchData<Broker[]>(`${host}?isActive=1`, requestOptions);
        },

        store: (broker: Broker) => {
            const headers = new Headers();
            headers.append("X-Api-Key", token);
            headers.append("Content-Type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    identifier: broker.identifier,
                    name: broker.name,
                    description: broker.description,
                }),
            };
            return fetchData<Broker>(host, requestOptions);
        },

        update: (id: string, updates: Partial<Broker>) => {
            const headers = new Headers();
            headers.append("X-Api-Key", token);
            headers.append("Content-Type", "application/json");

            const requestOptions = {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(updates),
            };
            return fetchData<Broker>(`${host}/${id}`, requestOptions);
        },
    };
};
