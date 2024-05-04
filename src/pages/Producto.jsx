import { useLocation } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Producto(){
    const location = useLocation();

    console.log(location.state);
    return (
        <>
            <Header/>

            <Footer/>
        </>
    );
}