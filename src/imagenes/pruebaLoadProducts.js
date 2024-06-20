const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6YW5vbkBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg5NTI4OCwiZXhwIjoxNzE4ODk4ODg4fQ.Str_ME5SsaTKDO6R9VY5AXlImhb0OuUM9seVM2sInK27leNPHjbXJtjYn1Y8qDewMFI2bmYZLKecCRH2AV3HRA";

// Directorio donde están almacenadas las imágenes
const imageDirectory = path.join(__dirname, 'productos');

// Lista de archivos de imagen a cargar
const imageFiles = [
    'comic1.webp', 'comic5.jpg', 'comic11.jpg', 'comic15.webp', 'comic36.jpg', 'comic47.webp', 'comic245.webp',
    'abuelo-funko.webp', 'flanders-funko.webp', 'homero-funko.webp', 'homero-funko-2.jpg', 'lisa-funko.webp',
    'marge-funko.webp', 'moe-funko.png', 'juegos-guerra.webp', 'juegos-clue.jpg', 'juegos-life.webp', 'juegos-monopoly.webp',
    'juegos-operando.jpg', 'buzo1.webp', 'buzo2.webp', 'gorro1.jpg', 'gorro2.jpg', 'remera1.jpg', 'remera2.jpg', 
    'remera3.jpg', 'remera4.jpg', 'remera5.webp'
];

// Función para cargar archivos de imagen
function loadFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        console.log(`Loaded ${filePath}`);
        return data;
    } catch (error) {
        console.error(`Error loading ${filePath}:`);
        return null;
    }
}

// Cargar todas las imágenes
const images = {};
imageFiles.forEach((imageFile) => {
    const filePath = path.join(imageDirectory, imageFile);
    images[imageFile] = loadFile(filePath);
});

//Productos
const products = [
    {
      name: 'Comic 1',
      description: 'Comic numero 1 de los Simpsons',
      price: 9.99,
      imageName: 'comic1.webp',
      category: 'Comic',
      stock: 10
    },
    {
        name: 'Comic 5',
        description: 'Comic numero 5 de los Simpsons',
        price: 9.99,
        imageName: 'comic5.jpg',
        category: 'Comic',
        stock: 5
      },
      {
        name: 'Comic 11',
        description: 'Comic numero 11 de los Simpsons',
        price: 9.99,
        imageName: 'comic11.jpg',
        category: 'Comic',
        stock: 5
      },
      {
        name: 'Comic 15',
        description: 'Comic numero 15 de los Simpsons',
        price: 9.99,
        imageName: 'comic15.webp',
        category: 'Comic',
        stock: 0
      },
      {
        name: 'Comic 36',
        description: 'Comic numero 36 de los Simpsons',
        price: 9.99,
        imageName: 'comic36.jpg',
        category: 'Comic',
        stock: 10
      },
      {
        name: 'Comic 47',
        description: 'Comic numero 47 de los Simpsons',
        price: 9.99,
        imageName: 'comic47.webp',
        category: 'Comic',
        stock: 6
      },
      {
        name: 'Comic 245',
        description: 'Comic numero 245 de los Simpsons',
        price: 9.99,
        imageName: 'comic245.webp',
        category: 'Comic',
        stock: 15
      },
      {
        name: 'Funko POP Abuelo',
        description: 'Figura coleccionable Funko POP del abuelo ',
        price: 25,
        imageName: 'abuelo-funko.webp',
        category: 'Funko',
        stock: 0
      },
      {
        name: 'Funko POP Flanders',
        description: 'Figura coleccionable Funko POP de Flanders',
        price: 25,
        imageName: 'flanders-funko.webp',
        category: 'Funko',
        stock: 10
      },
      {
        name: 'Funko POP Homero 1 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 25,
        imageName: 'homero-funko.webp',
        category: 'Funko',
        stock: 10
      },
      {
        name: 'Funko POP Homero 2 ',
        description: 'Figura coleccionable Funko POP de Homero',
        price: 30,
        imageName: 'homero-funko-2.jpg',
        category: 'Funko',
        stock: 5
      },
      {
        name: 'Funko POP Lisa',
        description: 'Figura coleccionable Funko POP de Lisa ',
        price: 25,
        imageName: 'lisa-funko.webp',
        category: 'Funko',
        stock: 10
      },
      {
        name: 'Funko POP Marge ',
        description: 'Figura coleccionable Funko POP de Marge',
        price: 25,
        imageName: 'marge-funko.webp',
        category: 'Funko',
        stock: 12
      },
      {
        name: 'Funko POP Moe',
        description: 'Figura coleccionable Funko POP de Moe',
        price: 25,
        imageName: 'moe-funko.png',
        category: 'Funko',
        stock: 10
      },
      {
        name: 'Guerra de generos',
        description: 'Juego de mesa guerra de generos ',
        price: 30,
        imageName: 'juegos-guerra.webp',
        category: 'Juego',
        stock: 10
      },
      {
        name: 'Clue',
        description: 'Juego de mesa Clue ',
        price: 35,
        imageName: 'juegos-clue.jpg',
        category: 'Juego',
        stock: 10
      },
      {
        name: 'Life',
        description: 'Juego de mesa Life ',
        price: 30,
        imageName: 'juegos-life.webp',
        category: 'Juego',
        stock: 10
      },
      {
        name: 'Monopoly',
        description: 'Juego de mesa Monopoly',
        price: 35,
        imageName: 'juegos-monopoly.webp',
        category: 'Juego',
        stock: 10
      },
      {
        name: 'Operando',
        description: 'Juego de mesa Operando',
        price: 30,
        imageName: 'juegos-operando.jpg',
        category: 'Juego',
        stock: 10
      },
      {
        name: 'Buzo famila Simpson',
        description: 'Buzo estampado de la familia mas famosa',
        price: 15,
        imageName: 'buzo1.webp',
        category: 'Ropa',
        stock: 5
      },
      {
        name: 'Buzo Duff',
        description: 'Buzo rojo de la cerveza oficial de los Simpsons',
        price: 15,
        imageName: 'buzo2.webp',
        category: 'Ropa',
        stock: 10
      },
      {
        name: 'Gorro Duff',
        description: 'Gorro rojo Duff para el frio',
        price: 10,
        imageName: 'gorro1.jpg',
        category: 'Ropa',
        stock: 15
      },
      {
        name: 'Gorro oveja',
        description: 'Gorro de la oveja que no recuerdo su nombre',
        price: 10,
        imageName: 'gorro2.jpg',
        category: 'Ropa',
        stock: 12
      },
      {
        name: 'Remera Homero',
        description: 'Remera de Homero bañandose con una Duff, bien fresca!',
        price: 15,
        imageName: 'remera1.jpg',
        category: 'Ropa',
        stock: 10
      },
      {
        name: 'Remera Duff',
        description: 'Remera de Homero, como siempre, con una Duff!',
        price: 12,
        imageName: 'remera2.jpg',
        category: 'Ropa',
        stock: 15
      },
      {
        name: 'Remera arbusto',
        description: 'Es Homero, en un arbusto, nada mas.',
        price: 12,
        imageName: 'remera3.jpg',
        category: 'Ropa',
        stock: 12
      },
      {
        name: 'Remera Bart',
        description: 'Remera de bart "Dont have a cow. MAN!',
        price: 15,
        imageName: 'remera4.jpg',
        category: 'Ropa',
        stock: 0
      },
      {
        name: 'Remera Yo no fui',
        description: 'Clasica frase de bart, en una remera. Inovador, no?',
        price: 10,
        imageName: 'remera5.webp',
        category: 'Ropa',
        stock: 15
      }
];

//transformar productos
const transformedProducts = products.map(product => ({
    ...product,
    image: images[product.imageName]
}));

// Función para realizar una solicitud POST
async function postProduct(product, url = 'http://localhost:8080/products/create') {
    const form = new FormData();
    form.append('name', product.name);
    form.append('description', product.description);
    form.append('price', product.price);
    form.append('image', product.image, product.imageName);
    form.append('category', product.category);
    form.append('stock', product.stock);

    try {
        const response = await axios.post(url, form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${jwtToken}`
            },
        });
        console.log(`POST response for ${product.name}: ${response.status}`);
    } catch (error) {
        console.error(`Error during POST request for ${product.name}:`);
    }
}

// Realizar la solicitud POST para cada producto
transformedProducts.forEach(product => {
    if (product.image) {
        postProduct(product);
    }
});