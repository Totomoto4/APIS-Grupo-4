import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para procesar el registro
    console.log('Nombre de usuario:', username);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    // Agrega tu lógica de validación aquí
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // Si los datos son válidos, redirige al usuario a la ruta '/home'
      navigate('/home');
    } else {
      // Si los datos no son válidos, muestra un mensaje de error o realiza otra acción
      console.log('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="register-container">
        <div className="register-form">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Nombre de usuario:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </label>
                <br />
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
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
  );
};

export default Register;