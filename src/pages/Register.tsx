import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';
import './Register.css';

const Register: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        console.log('Registro exitoso:', { nombre, apellido, email, password });
    };

    return (
        <div className="register-page">
            <div className="register-image">
                {/* Aquí puedes poner un placeholder o cargar una imagen de fondo */}
                <img src="path/to/your/image.jpg" alt="Imagen de fondo" />
            </div>
            <div className="register-container">
                <form onSubmit={handleRegister} className="register-form">
                    <h1>Portal de Inversionistas</h1>
                    <p>¡Te damos la bienvenida! Por favor, completa los siguientes datos para poder crear tu cuenta.</p>
                    <div className="input-group">
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Ingresar nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                            <label className={nombre ? 'filled' : ''}>Nombre</label>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Ingresar apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                            <label className={apellido ? 'filled' : ''}>Apellido</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="Ingresar correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaEnvelope className="input-icon" />
                        <label className={email ? 'filled' : ''}></label>
                    </div>
                    <div className="input-container password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresar contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <label className={password ? 'filled' : ''}></label>
                    </div>
                    <div className="input-container password-container">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder=""
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <label className={confirmPassword ? 'filled' : ''}>Confirmar contraseña</label>
                    </div>
                    <div className="terms-container">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            Declaro que soy mayor de edad y acepto los <a href="#">términos y condiciones</a> de Wbuild.
                        </label>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="register-button">Registrarse</button>
                    <p className="login-link">
                        ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
