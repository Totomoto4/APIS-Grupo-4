import { Link } from 'react-router-dom';
import './Carousel.css';

export default function Carousel(){
    return (
      <div className="carousel-container">
        <Link>
          <div className="carousel-content">
            <h2>Comics</h2>
           </div> 
        </Link>
        <Link>
          <div className="carousel-content">
            <h2>Funkos</h2>
           </div> 
        </Link>
        <Link>
          <div className="carousel-content">
            <h2>Juegos</h2>
           </div> 
        </Link>
        <Link>
          <div className="carousel-content">
            <h2>Ropa</h2>
           </div> 
        </Link>
      </div>
    );

}