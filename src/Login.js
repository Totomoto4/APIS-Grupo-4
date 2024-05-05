import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    // Agrega tu lógica de validación aquí
    if (email.trim() !== '' && password.trim() !== '') {
      const usuario = { email, rol: isAdmin ? 'admin' : 'cliente', nombreUsuario: 'NombreDeUsuario' };
      localStorage.setItem('usuario', JSON.stringify(usuario));
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