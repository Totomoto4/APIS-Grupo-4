
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './Account.css';
import { useSelector, useDispatch } from 'react-redux';
import { UserContext } from '../context/UserContext.tsx';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Account = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = user && user.rol === 'admin';

  const handleSignOut = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  const handlePublicaciones = () => {
    navigate('/administration');
  };


  return (
    <div className="dropdownAc">
      <button className="dropbtnAc">Cuenta</button>
      <div className="dropdown-content-Ac">
        <h4>{user ? user.nombreUsuario : 'Usuario Invitado'}</h4>
        {isAdmin && <button className='BtnAdmin' onClick={handlePublicaciones}>Publicaciones</button>}
        <button className='signOut' onClick={ handleSignOut }>{user ? 'Cerrar sesion' : 'Log In'}</button>
      </div>
    </div>
  );
};

export default Account;