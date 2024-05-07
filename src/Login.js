import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions'
import { USUARIOS } from './dummys/usuariosDummy';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    const usuario = USUARIOS.find(user => user.email === email && user.contraseña === password);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    if (usuario) {
      const isAdmin = usuario.rol === 'admin';
      dispatch(login(usuario, isAdmin));
      navigate('/home');
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
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