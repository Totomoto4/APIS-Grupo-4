import comic1 from '../imagenes/productos/comic/comic1.webp'
import comic5 from '../imagenes/productos/comic/comic5.jpg'
import comic11 from '../imagenes/productos/comic/comic11.jpg'
import comic15 from '../imagenes/productos/comic/comic15.webp'
import comic36 from '../imagenes/productos/comic/comic36.jpg'
import comic47 from '../imagenes/productos/comic/comic47.webp'
import comic245 from '../imagenes/productos/comic/comic245.webp'

import funkoAbuelo from '../imagenes/productos/funkos/abuelo-funko.webp'
import funkoFlanders from '../imagenes/productos/funkos/flanders-funko.webp'
import funkoHomero from '../imagenes/productos/funkos/homero-funko.webp'
import funkoHomero2 from '../imagenes/productos/funkos/homero-funko-2.jpg'
import funkoLisa from '../imagenes/productos/funkos/lisa-funko.webp'
import funkoMarge from '../imagenes/productos/funkos/marge-funko.webp'
import funkoMoe from '../imagenes/productos/funkos/moe-funko.png'

import juegoGuerra from '../imagenes/productos/juegos/jeugos-guerra.webp'
import juegoClue from '../imagenes/productos/juegos/juegos-clue.jpg'
import juegoLife from '../imagenes/productos/juegos/juegos-life.webp'
import juegoMonopoly from '../imagenes/productos/juegos/juegos-monopoly.webp'
import JuegoOperando from '../imagenes/productos/juegos/juegos-operando.jpg'

import ropaBuzo1 from '../imagenes/productos/ropa/buzo1.webp'
import ropaBuzo2 from '../imagenes/productos/ropa/buzo2.webp'
import ropaGorro1 from '../imagenes/productos/ropa/gorro1.jpg'
import ropaGorro2 from '../imagenes/productos/ropa/gorro2.jpg'
import ropaRemera1 from '../imagenes/productos/ropa/remera1.jpg'
import ropaRemera2 from '../imagenes/productos/ropa/remra2.jpg'
import ropaRemera3 from '../imagenes/productos/ropa/remera3.jpg'
import ropaRemera4 from '../imagenes/productos/ropa/remera4.jpg'
import ropaRemera5 from '../imagenes/productos/ropa/remera5.webp'


export const products = [
    {
      id: 1,
      name: 'Comic #1',
      description: 'Comic numero #1  de los Simpsons',
      price: 9.99,
      image:comic1,
      category: 'Comic',
    },
    {
        id: 2,
        name: 'Comic #5',
        description: 'Comic numero #5  de los Simpsons',
        price: 9.99,
        image: comic5,
        category: 'Comic',
      },
      {
        id: 3,
        name: 'Comic #11',
        description: 'Comic numero #11  de los Simpsons',
        price: 9.99,
        image: comic11 ,
        category: 'Comic',
      },
      {
        id: 4,
        name: 'Comic #15',
        description: 'Comic numero #15  de los Simpsons',
        price: 9.99,
        image:comic15,
        category: 'Comic',
      },
      {
        id: 5,
        name: 'Comic #36',
        description: 'Comic numero #  de los Simpsons',
        price: 9.99,
        image: comic36,
        category: 'Comic',
      },
      {
        id: 6,
        name: 'Comic #47',
        description: 'Comic numero #  de los Simpsons',
        price: 9.99,
        image: comic47,
        category: 'Comic',
      },
      {
        id: 7,
        name: 'Comic #245',
        description: 'Comic numero #245  de los Simpsons',
        price: 9.99,
        image: comic245,
        category: 'Comic',
      },
      {
        id: 8,
        name: 'Funko POP Abuelo',
        description: 'Figura coleccionable Funko POP del abuelo ',
        price: 25,
        image: funkoAbuelo ,
        category: 'Funko',
      },
      {
        id: 9,
        name: 'Funko POP Flanders',
        description: 'Figura coleccionable Funko POP de Flanders',
        price: 25,
        image: funkoFlanders,
        category: 'Funko',
      },
      {
        id: 10 ,
        name: 'Funko POP Homero #1 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 25,
        image: funkoHomero,
        category: 'Funko',
      },
      {
        id: 11 ,
        name: 'Funko POP Homero #2 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 30,
        image: funkoHomero2,
        category: 'Funko',
      },
      {
        id: 12 ,
        name: 'Funko POP Lisa',
        description: 'Figura coleccionable Funko POP de Lisa ',
        price: 25,
        image: funkoLisa ,
        category: 'Funko',
      },
      {
        id: 13 ,
        name: 'Funko POP Marge ',
        description: 'Figura coleccionable Funko POP de Marge',
        price: 25,
        image: funkoMarge,
        category: 'Funko',
      },
      {
        id: 14,
        name: 'Funko POP Moe',
        description: 'Figura coleccionable Funko POP de Moe',
        price: 25,
        image: funkoMoe ,
        category: 'Funko',
      },
      {
        id:15 ,
        name: 'Guerra de generos',
        description: 'Juego de mesa guerra de generos ',
        price: 30,
        image: juegoGuerra ,
        category: 'Juego',
      },
      {
        id:16 ,
        name: 'Clue',
        description: 'Juego de mesa Clue ',
        price: 35,
        image: juegoClue ,
        category: 'Juego',
      },
      {
        id: 17,
        name: 'Life',
        description: 'Juego de mesa Life ',
        price: 30,
        image: juegoLife ,
        category: 'Juego',
      },
      {
        id: 18 ,
        name: 'Monopoly',
        description: 'Juego de mesa Monopoly',
        price: 35,
        image: juegoMonopoly ,
        category: 'Juego',
      },
      {
        id:19,
        name: 'Operando',
        description: 'Juego de mesa Operando',
        price: 30,
        image: JuegoOperando ,
        category: 'Juego',
      },
      {
        id: 20 ,
        name: 'Buzo famila Simpson',
        description: 'Buzo estampado de la familia mas famosa',
        price: 15,
        image: ropaBuzo1 ,
        category: 'Ropa',
      },
      {
        id: 21,
        name: 'Buzo Duff',
        description: 'Buzo rojo de la cerveza oficial de los Simpsons',
        price: 15,
        image: ropaBuzo2 ,
        category: 'Ropa',
      },
      {
        id: 22,
        name: 'Gorro Duff',
        description: 'Gorro rojo Duff para el frio',
        price: 10,
        image: ropaGorro1,
        category: 'Ropa',
      },
      {
        id: 23,
        name: 'Gorro oveja',
        description: 'Gorro de la oveja que no recuerdo su nombre',
        price: 10,
        image: ropaGorro2,
        category: 'Ropa',
      },
      {
        id: 24,
        name: 'Remera Homero',
        description: 'Remera de Homero bañandose con una Duff, bien fresca!',
        price: 15,
        image: ropaRemera1,
        category: 'Ropa',
      },
      {
        id: 25,
        name: 'Remera Duff',
        description: 'Remera de Homero, como siempre, con una Duff!',
        price: 12,
        image: ropaRemera2,
        category: 'Ropa',
      },
      {
        id: 26,
        name: 'Remera arbusto',
        description: 'Es Homero, en un arbusto, nada mas.',
        price: 12,
        image: ropaRemera3 ,
        category: 'Ropa',
      },
      {
        id: 27,
        name: 'Remera Bart',
        description: 'Remera de bart "Dont have a cow. MAN!',
        price: 15,
        image: ropaRemera4 ,
        category: 'Ropa',
      },
      {
        id: 28 ,
        name: 'Remera Yo no fui',
        description: 'Clasica frase de bart, en una remera. Inovador, no?',
        price: 10,
        image: ropaRemera5 ,
        category: 'Ropa',
      }
    ]
      
      
