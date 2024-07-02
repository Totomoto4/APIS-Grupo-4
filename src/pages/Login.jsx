import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { authUser } from '../funcionesFetch/authFunctions';
import { useDispatch } from 'react-redux';

import logo from '../imagenes/generales/kiwi-logo-pequeño.png';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requestBody = {
          email: email.trim(),
          password: password
        };
    
        try {
          const user = await authUser(requestBody);
    
          if (user) {
            dispatch({
              type: 'SET_USER',
              payload: user
            });
    
            navigate('/home');
          }
        } catch (error) {
          console.error('Error en el inicio de sesión:', error);
        }
      };

    return (
      <div className="login-container">
        <div className="login-form">
          <Link to={"/"} id='linkToHome'>
            <img src={logo} alt="logo" id="logo" />
          </Link>

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