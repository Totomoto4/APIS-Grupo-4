import { Link } from 'react-router-dom';

import './RoundedCarrousel.css';
import Ned from '../imagenes/personas/ned.png'
import Lisa from '../imagenes/personas/lisa.png'
import Alcalde from '../imagenes/personas/alcalde.jpg'
import Barney from '../imagenes/personas/barney.png'
import Jeff from '../imagenes/personas/jeff.png'


import est1 from '../imagenes/ratings/1.svg'
import est4 from '../imagenes/ratings/4.svg'
import est5 from '../imagenes/ratings/5.svg'


export default function RoundedCarrousel(){
    return (
      <div class = "reviewsContainer">

        <div class="reviewBox">
            <img id="Perfil-Review"src={Ned} alt=''/><img id="Estrellas"src={est5} alt=''/>
            <h3 class= 'userReview'>Ned Flanders</h3>
            <Link to={"/producto/18"}><h4 class= 'productName'>Monopoly Simpsons</h4> </Link>
            <p class = 'review'>Un divertidillo desafio, vecino! El Monopoly de Los Simpsons es divertido y de alta calidad. Ideal para fans de la serie y familias. ¡Recomendado!</p>
        </div>
        
        <div class="reviewBox">
            <img id="Perfil-Review"src={Lisa} alt=''/><img id="Estrellas"src={est4} alt=''/>
            <h3 class= 'userReview'>Lisa Simpson</h3>
            <Link to={"/producto/12"}><h4 class= 'productName'>Funko POP Lisa</h4></Link>
            <p class = 'review'>Esperaba un poco mas en terminos de calidad por el precio. No obstante, sigue siendo una gran pieza para mi colección.</p>
        </div>

        <div class="reviewBox">
            <img id="Perfil-Review"src={Alcalde} alt=''/><img id="Estrellas"src={est5} alt=''/>
            <h3 class= 'userReview'>Alcalde Diamante</h3>
            <Link to={"/producto/23"}><h4 class= 'productName'>Gorro oveja</h4> </Link>
            <p class = 'review'>Gorra genial! Dibujo llamativo que refleja uno de los grandes personajes de Springfield. Calidad sólida.</p>
        </div>

        <div class="reviewBox">
            <img id="Perfil-Review"src={Barney} alt=''/><img id="Estrellas"src={est5} alt=''/>
            <h3 class= 'userReview'>Barney gomez</h3>
            <Link to={"/producto/15"}><h4 class= 'productName'>Guerra de generos</h4> </Link>
            <p class = 'review'>Guerra de Generos es epico, amigo. Preguntas ingeniosas, calidad excelente. Cinco estrellas!</p>
        </div>

        <div class="reviewBox">
            <img id="Perfil-Review"src={Jeff} alt=''/><img id="Estrellas"src={est1} alt=''/>
            <h3 class= 'userReview'>Jeff Albertson</h3>
            <Link to={"/producto/4"}><h4 class= 'productName'>Comic 15</h4></Link>
            <p class = 'review'>El arte es decente, pero mi participación es minima. La trama es floja y carece de emoción. En resumen, es un cómic decepcionante, para los fans que esperaban mas del personaje.</p>
        </div>

        
      </div>
    );

}