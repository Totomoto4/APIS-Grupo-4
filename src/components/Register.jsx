import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

//ESTA FUNCION SERA IMPLEMENTADA EN BACKEND
function verificarDisponibilidad(email){
}


const Register = () => {
  const [name, setName]= useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </label>

          <label>
            Apellido:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
            />
          </label>

          <label>
            Nombre de usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <fieldset>
            <div className='radiobutton-container'>
              <input type="radio" id="vendedor" name="categoria" value="vendedor"/>
              <label for="vendedor">Quiero vender</label>
            </div>

            <div className='radiobutton-container'>
              <input type="radio" id="cliente" name="categoria" value="cliente" checked/>
              <label for="cliente">Quiero comprar</label>
            </div>
          </fieldset>

          <button type="submit">Registrarse</button>
        </form>
        <div className="register-footer">
          <p>
            ¿Tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;