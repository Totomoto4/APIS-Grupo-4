import logo from "../imagenes/generales/kiwi-logo-pequeño.png";
import './Footer.css'

export default function Footer(){
    
    return(
        <footer>
            <img src={logo} alt="logo"/>
            <h1>Gracias, Vuelva Prontos!</h1>
            <p>UADE - APIS - 2024</p>
        </footer>
    )
}