import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../funcionesFetch/auth';
import './Register.css';

import logo from '../imagenes/generales/kiwi-logo-pequeño.png';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    administrator: false,
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto de enviar el formulario
    console.log('Datos del formulario:', formData);

    if (formData.name && formData.lastName && formData.email && formData.password) {
      try {
        const response = await register(formData);
        if (response.error) {
          
        } else {
          console.log('Registro exitoso:', response);
          // Aquí puedes redirigir al usuario o limpiar el formulario, según sea necesario
        }
      } catch (e) {
        setFormData({
          name: '',
      lastName: '',
      email: '',
      administrator: false,
      password: ''
        })
      }
    } else {
      console.log('Completar todos los campos');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <img src={logo} alt='logo' id='logo'/>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={(e) => handleInputChange(e) }
            />
          </label>

          <label>
            Apellido:
            <input
              type="text"
              name='lastName'
              value={formData.lastName}
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={(e) => handleInputChange(e)}
            />
          </label>

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