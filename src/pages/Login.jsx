import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

import logo from '../imagenes/generales/kiwi-logo-pequeño.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            email: email.trim(),
            password: password
        };

        try {
            const response = await axios.post('http://localhost:8080/auth/login', requestBody);
            console.log('Inicio de sesión exitoso:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={logo} alt='logo' id='logo'/>
                <h1>Inicio de sesión</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Correo electrónico
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                        />
                    </label>
                    <label>
                        Contraseña
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <div className="login-footer">
                    <p>
                        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;