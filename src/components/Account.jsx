import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/actions';
import './Account.css';

const Account = () => {
  const usuario = useSelector(state => state.usuario);
  const isAdmin = useSelector(state => state.isAdmin);
  const dispatch = useDispatch();
  
  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className="dropdownAc">
      <button className="dropbtnAc">Cuenta</button>
      <div className="dropdown-content-Ac">
        <h4>{usuario ? usuario.nombre : 'Usuario Invitado'}</h4>
        <button className='config'>Configuraciones</button>
        {isAdmin && <button className='BtnAdmin'>Publicaciones</button>}
        <button className='signOut' onClick={handleSignOut}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Account;