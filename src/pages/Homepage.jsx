import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.tsx';
import Header from '../components/Header.jsx';
import './Homepage.css';

import logoGrande from '../imagenes/generales/apu.jpg';
import Footer from '../components/Footer.jsx';


export default function Homepage(){

    const { user, updateUser } = useContext(UserContext);
    console.log(user);

    return(
        <>
            <Header />
            <main>
            </main>
        </>
    )
}