import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './Account.css';

export default function Account() {
  const [usuario, setUsuario] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioAlmacenado) {
      setUsuario(usuarioAlmacenado);
      setIsAdmin(usuarioAlmacenado.rol === 'admin');
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  };

  return (
    <div className="dropdownAc">
      <button className="dropbtnAc">Cuenta</button>
      <div className="dropdown-content-Ac">
        <h4>{usuario ? usuario.nombreUsuario : 'Usuario Invitado'}</h4>
        <button className='config'>Configuración</button>
        {isAdmin && <button className='BtnAdmin'>Publicaciones</button>}
        <button className='signOut' onClick={handleSignOut}>Cerrar Sesión</button>
      </div>
    </div>
  );
}
