import {React} from "react";

import "./Homepage.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";

import simpsonslogo from "../imagenes/generales/The-Simpsons-Logo-PNG.png";
import GifSlider from "../components/GifSlider.jsx";
import RoundedCarrousel from "../components/RoundedCarrousel.jsx";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="homepage-main">
        
        <div className="homepage-container">
        <img id="LOGO-SIMPSONS" src={simpsonslogo} alt=""/>
          <Carousel />

          <RoundedCarrousel />
          
        </div>
      </main>
      <Footer />
    </>
  );
}
