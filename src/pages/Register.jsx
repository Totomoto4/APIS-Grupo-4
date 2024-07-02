import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../imagenes/generales/kiwi-logo-pequeño.png';
import { registerUser } from '../funcionesFetch/authFunctions';


const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      name: name.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: password,
    };

    const user = registerUser(requestBody);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <Link to={"/"} id="linkToHome">
          <img src={logo} alt="logo" id="logo" />
        </Link>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Apellido:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Registrarse</button>
        </form>
        <div className="register-footer">
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;