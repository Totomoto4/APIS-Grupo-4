import React from 'react';
import './Account.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.tsx';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Account = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const isAdmin = user && user.rol === 'admin';

  const handleSignOut = () => {
    navigate('/login')
  };

  return (
    <div className="dropdownAc">
      <button className="dropbtnAc">Cuenta</button>
      <div className="dropdown-content-Ac">
        <h4>{user ? user.nombreUsuario : 'Usuario Invitado'}</h4>
        <button className='config'>Configuraciones</button>
        {isAdmin && <button className='BtnAdmin'>Publicaciones</button>}
        <button className='signOut' onClick={ handleSignOut }>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Account;