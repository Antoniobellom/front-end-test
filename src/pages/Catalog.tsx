import React, { useEffect } from 'react';
import './Catalog.css';

const Catalog: React.FC = () => {

    useEffect(() => {
        // Verificar si el usuario está logueado
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            window.location.href = '/login';
        }
    }, []);

    return (
        <div className="catalog-container">
            <h1>Catálogo de Inversiones</h1>
            <p>Aquí se listarán los activos inmobiliarios disponibles para invertir.</p>
        </div>
    );
};

export default Catalog;
