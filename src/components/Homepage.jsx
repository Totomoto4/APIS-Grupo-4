import { useContext } from 'react';

import { UserContext } from '../context/UserContext.tsx';

import logo from '../imagenes/logo.svg';
import { Link } from 'react-router-dom';

export default function Homepage(){

    const {user, updateUser} = useContext(UserContext);
    console.log(user);

    return(
        <section>
            <h1>PRUEBA HOMEPAGE</h1>
            {user ? <p>Usuario logueado: {user.nombreUsuario}</p> :<Link to='/login'>Log in!</Link>}
        </section>
    )
}