//Nombre del usuario, boton para settings, si es admin que aparezca un boton para la interfaz de admin y boton de sigout
import React from 'react';
import './Account.css';
import USUARIOS from '../dummys/usuariosDummy';

export default function Account({ isAdmin }) {

  return (
    <div className="dropdownAc">
      <button className="dropbtnAc">
        Cuenta
      </button>
        <div className="dropdown-content-Ac">
          <h4> Nombre Usuario </h4>
          <button className='config'>Configuración</button>
          <button className='signOut'>Cerrar Sesión</button>
          {isAdmin && <button className='BtnAdmin'>Publicaciones</button>}
        </div>
    </div>
  );
}
