// products.js
import auris from '../imagenes/auris.jpg';
import cargador from '../imagenes/cargador.jpg';
import monitor from '../imagenes/monitor.jpg';
import mouse from '../imagenes/mouse.jpg';
import placa from '../imagenes/placa-video.jpg';
import teclado from '../imagenes/teclado.jpg';

export const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 19.99,
    image: monitor,
    category: 'Monitores',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 29.99,
    image: teclado,
    category: 'Teclados',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 29.99,
    image: auris,
    category: 'Monitores',
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Descripción del producto 4',
    price: 29.99,
    image: placa,
    category: 'Monitores',
  },
  {
    id: 5,
    name: 'Producto 5',
    description: 'Descripción del producto 5',
    price: 29.99,
    image: cargador,
    category: 'Monitores',
  },
  {
    id: 6,
    name: 'Producto 6',
    description: 'Descripción del producto 6',
    price: 29.99,
    image: mouse,
    category: 'Monitores',
  },
];