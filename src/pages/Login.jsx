import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

import { USUARIOS } from '../dummys/usuariosDummy.js';
import { UserContext } from '../context/UserContext.tsx';
import { useDispatch } from 'react-redux';
import logo from '../imagenes/generales/kiwi-logo-pequeño.png';

//Esta funcionalidad sera del backend, es temporal.
function authUser(email, password){
  //valida el email y contraseña, si son valido devuelve el usuario, sino undefined
  const usuarioEncontrado = USUARIOS.find( (usuario) => usuario.email === email.trim());

  if(usuarioEncontrado && usuarioEncontrado.contraseña === password){
    return usuarioEncontrado;
  }
  
  return undefined; //si no lo encontro o la password esta mal, devuelve undefined
}

const Login = () => {

  //State del form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    const usuarioEncontrado = authUser(email, password);
    if (usuarioEncontrado) {
      dispatch({ type: 'SET_USER', payload: usuarioEncontrado });
      navigate('/home');
    } else {
      console.log('Los datos son incorrectos');
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
            Password
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