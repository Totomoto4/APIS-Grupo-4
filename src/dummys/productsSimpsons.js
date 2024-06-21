import comic1 from '../imagenes/productos/comic1.webp'
import comic5 from '../imagenes/productos/comic5.jpg'
import comic11 from '../imagenes/productos/comic11.jpg'
import comic15 from '../imagenes/productos/comic15.webp'
import comic36 from '../imagenes/productos/comic36.jpg'
import comic47 from '../imagenes/productos/comic47.webp'
import comic245 from '../imagenes/productos/comic245.webp'

import funkoAbuelo from '../imagenes/productos/abuelo-funko.webp'
import funkoFlanders from '../imagenes/productos/flanders-funko.webp'
import funkoHomero from '../imagenes/productos/homero-funko.webp'
import funkoHomero2 from '../imagenes/productos/homero-funko-2.jpg'
import funkoLisa from '../imagenes/productos/lisa-funko.webp'
import funkoMarge from '../imagenes/productos/marge-funko.webp'
import funkoMoe from '../imagenes/productos/moe-funko.png'

import juegoGuerra from '../imagenes/productos/juegos-guerra.webp'
import juegoClue from '../imagenes/productos/juegos-clue.jpg'
import juegoLife from '../imagenes/productos/juegos-life.webp'
import juegoMonopoly from '../imagenes/productos/juegos-monopoly.webp'
import JuegoOperando from '../imagenes/productos/juegos-operando.jpg'

import ropaBuzo1 from '../imagenes/productos/buzo1.webp'
import ropaBuzo2 from '../imagenes/productos/buzo2.webp'
import ropaGorro1 from '../imagenes/productos/gorro1.jpg'
import ropaGorro2 from '../imagenes/productos/gorro2.jpg'
import ropaRemera1 from '../imagenes/productos/remera1.jpg'
import ropaRemera2 from '../imagenes/productos/remera2.jpg'
import ropaRemera3 from '../imagenes/productos/remera3.jpg'
import ropaRemera4 from '../imagenes/productos/remera4.jpg'
import ropaRemera5 from '../imagenes/productos/remera5.webp'


export const products = [
    {
      id: 1,
      name: 'Comic 1',
      description: 'Comic numero 1 de los Simpsons',
      price: 9.99,
      image:comic1,
      category: 'Comic',
      stock:10
    },
    {
        id: 2,
        name: 'Comic 5',
        description: 'Comic numero 5 de los Simpsons',
        price: 9.99,
        image: comic5,
        category: 'Comic',
        stock:5
      },
      {
        id: 3,
        name: 'Comic 11',
        description: 'Comic numero 11 de los Simpsons',
        price: 9.99,
        image: comic11 ,
        category: 'Comic',
        stock:5
      },
      {
        id: 4,
        name: 'Comic 15',
        description: 'Comic numero 15 de los Simpsons',
        price: 9.99,
        image:comic15,
        category: 'Comic',
        stock:0
      },
      {
        id: 5,
        name: 'Comic 36',
        description: 'Comic numero 36 de los Simpsons',
        price: 9.99,
        image: comic36,
        category: 'Comic',
        stock:10
      },
      {
        id: 6,
        name: 'Comic 47',
        description: 'Comic numero 47 de los Simpsons',
        price: 9.99,
        image: comic47,
        category: 'Comic',
        stock:6
      },
      {
        id: 7,
        name: 'Comic 245',
        description: 'Comic numero 245 de los Simpsons',
        price: 9.99,
        image: comic245,
        category: 'Comic',
        stock:15
      },
      {
        id: 8,
        name: 'Funko POP Abuelo',
        description: 'Figura coleccionable Funko POP del abuelo ',
        price: 25,
        image: funkoAbuelo ,
        category: 'Funko',
        stock:0
      },
      {
        id: 9,
        name: 'Funko POP Flanders',
        description: 'Figura coleccionable Funko POP de Flanders',
        price: 25,
        image: funkoFlanders,
        category: 'Funko',
        stock:10
      },
      {
        id: 10 ,
        name: 'Funko POP Homero 1 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 25,
        image: funkoHomero,
        category: 'Funko',
        stock:10
      },
      {
        id: 11 ,
        name: 'Funko POP Homero 2 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 30,
        image: funkoHomero2,
        category: 'Funko',
        stock:5
      },
      {
        id: 12 ,
        name: 'Funko POP Lisa',
        description: 'Figura coleccionable Funko POP de Lisa ',
        price: 25,
        image: funkoLisa ,
        category: 'Funko',
        stock:10
      },
      {
        id: 13 ,
        name: 'Funko POP Marge ',
        description: 'Figura coleccionable Funko POP de Marge',
        price: 25,
        image: funkoMarge,
        category: 'Funko',
        stock:12
      },
      {
        id: 14,
        name: 'Funko POP Moe',
        description: 'Figura coleccionable Funko POP de Moe',
        price: 25,
        image: funkoMoe ,
        category: 'Funko',
        stock:10
      },
      {
        id:15 ,
        name: 'Guerra de generos',
        description: 'Juego de mesa guerra de generos. ',
        price: 30,
        image: juegoGuerra ,
        category: 'Juego',
        stock:10
      },
      {
        id:16 ,
        name: 'Clue',
        description: 'Juego de mesa Clue ',
        price: 35,
        image: juegoClue ,
        category: 'Juego',
        stock:10
      },
      {
        id: 17,
        name: 'Life',
        description: 'Juego de mesa Life ',
        price: 30,
        image: juegoLife ,
        category: 'Juego',
        stock:10
      },
      {
        id: 18 ,
        name: 'Monopoly',
        description: 'Juego de mesa Monopoly',
        price: 35,
        image: juegoMonopoly ,
        category: 'Juego',
        stock:10
      },
      {
        id:19,
        name: 'Operando',
        description: 'Juego de mesa Operando',
        price: 30,
        image: JuegoOperando ,
        category: 'Juego',
        stock:10
      },
      {
        id: 20 ,
        name: 'Buzo famila Simpson',
        description: 'Buzo estampado de la familia mas famosa',
        price: 15,
        image: ropaBuzo1 ,
        category: 'Ropa',
        stock:5
      },
      {
        id: 21,
        name: 'Buzo Duff',
        description: 'Buzo rojo de la cerveza oficial de los Simpsons',
        price: 15,
        image: ropaBuzo2 ,
        category: 'Ropa',
        stock:10
      },
      {
        id: 22,
        name: 'Gorro Duff',
        description: 'Gorro rojo Duff para el frio',
        price: 10,
        image: ropaGorro1,
        category: 'Ropa',
        stock:15
      },
      {
        id: 23,
        name: 'Gorro oveja',
        description: 'Gorro de la oveja que no recuerdo su nombre',
        price: 10,
        image: ropaGorro2,
        category: 'Ropa',
        stock:12
      },
      {
        id: 24,
        name: 'Remera Homero',
        description: 'Remera de Homero bañandose con una Duff, bien fresca!',
        price: 15,
        image: ropaRemera1,
        category: 'Ropa',
        stock:10
      },
      {
        id: 25,
        name: 'Remera Duff',
        description: 'Remera de Homero, como siempre, con una Duff!',
        price: 12,
        image: ropaRemera2,
        category: 'Ropa',
        stock:15
      },
      {
        id: 26,
        name: 'Remera arbusto',
        description: 'Es Homero, en un arbusto, nada mas.',
        price: 12,
        image: ropaRemera3 ,
        category: 'Ropa',
        stock:12
      },
      {
        id: 27,
        name: 'Remera Bart',
        description: 'Remera de bart "Dont have a cow. MAN!',
        price: 15,
        image: ropaRemera4 ,
        category: 'Ropa',
        stock:0
      },
      {
        id: 28 ,
        name: 'Remera Yo no fui',
        description: 'Clasica frase de bart, en una remera. Inovador, no?',
        price: 10,
        image: ropaRemera5 ,
        category: 'Ropa',
        stock:15
      }
    ]