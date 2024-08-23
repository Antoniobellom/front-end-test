import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Obtener el usuario almacenado en localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);

            // Verificar las credenciales
            if (user.email === email && user.password === password) {
                // Simular un inicio de sesión exitoso
                localStorage.setItem('loggedIn', 'true');
                window.location.href = '/catalog';
            } else {
                setError('Correo o contraseña incorrectos');
            }
        } else {
            setError('No se encontró un usuario con ese correo');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Ingresar correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Ingresar contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Iniciar Sesión</button>
                </form>
                <p className="register-link">
                    ¿No tienes una cuenta? <a href="/register">Registrarse</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
