import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard.jsx"
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchProduct, fetchProductsByCategory } from "../funcionesFetch/fetchProducts.js";

import './Producto.css'

export default function Producto(){

    const dispatch = useDispatch();

    const [cantidad, setCantidad] = useState(1);

    const {productoID} = useParams();
    
    const [productoActual, setProductoActual] = useState(null);

    const [productosSimilares, setProductosSimilares] = useState([]);

    useEffect(() => {
      const loadProduct = async () => {
        try {
          const fetchedProduct = await fetchProduct(productoID); // Espera a que la promesa se resuelva y obtiene los productos
          setProductoActual(fetchedProduct); // Actualiza el estado con el producto obtenido

          if (fetchedProduct && fetchedProduct.category) {
            const similares = await fetchProductsByCategory(fetchedProduct.category);
            const similaresFiltrados = similares.filter(
              (product) => product.id !== fetchedProduct.id && product.stock > 0
            );

            // Mezclar la lista de productos filtrados y tomar los primeros tres elementos
            const randomProducts = similaresFiltrados.sort(() => 0.5 - Math.random()).slice(0, 3);
            setProductosSimilares(randomProducts);
          }

        } catch (error) {
          console.error('Error al obtener productos:', error);
        }
      };  
  
      loadProduct(); // Llama a la función asincrónica para cargar los productos
    }, [productoID]); 

    const handlePlusButton = ()=> {
        const cantidadActual = cantidad;
        setCantidad(cantidadActual + 1);
    }

    const handleLessButton = () => {
      const cantidadNueva = cantidad - 1;
      if (cantidadNueva >= 1) {
        setCantidad(cantidadNueva);
      }
    };

    const handleAddToCart = () => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...productoActual, cantidad }
      });
      toast.success(`${cantidad} ${productoActual.name} anadido al carrito`,{
        onClick: false 
      });
    };

    const renderRecomendaciones = () => {
        return productosSimilares.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ));
      };

    const renderStockPositivo = () => {
      return (
        <button id="ADDTOCART" onClick={handleAddToCart}>Add to cart</button>
      );
    };

    const renderStock0 = () => {
      return <p id="SIN-STOCK">Sin Stock</p>;
    };

    const getImageSource = () => {

      if (!productoActual.imageData || typeof productoActual.imageData !== 'string') {
        return ''; // Manejar caso donde product.imageData no está definido o no es una cadena válida
      }
  
  
      const base64Prefix = 'data:image/';
      let imageExtension = 'png'; // Default to PNG if no extension is detected
  
      // Detect JPEG
      if (productoActual.imageData.startsWith('/9j/')) {
        imageExtension = 'jpeg';
      }
  
      // Detect WebP
      if (productoActual.imageData.startsWith('UklGR')) {
        imageExtension = 'webp';
      }
  
      return `${base64Prefix}${imageExtension};base64, ${productoActual.imageData}`;
    };

    console.log(productoActual);
    console.log(productoID);

    // Renderizado condicional mientras se carga el producto
  if (!productoActual) {
    return (
      <>
        <Header />
        <main className="product-main">
          <div className="container">
            <p>Cargando producto...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

    return (
      <>
        <Header />
        <main className="product-main">
          <div className="container">
            <Link id="GOBACK" to={'/catalogo/'}>X</Link>
            <div className="product-container">
              <div className="product-image-container">
                <img src={getImageSource()} alt="imagen del producto" />
              </div>

              <section className="product-information">
                <h1>{productoActual.name}</h1>
                <p>{productoActual.description}</p>
                <p>S{productoActual.price}</p>

                <label>Cantidad</label>
                <div className="product-cantidad">
                  <button onClick={() => handleLessButton()}>-</button>
                  <p>{cantidad}</p>
                  <button onClick={() => handlePlusButton()}>+</button>
                </div>

                {productoActual.stock > 0 ? renderStockPositivo() : renderStock0()}
              </section>
            </div>

            <h2>Recomedaciones</h2>
            <section className="recomendaciones">{renderRecomendaciones()}</section>
          </div>
        </main>
        <Footer />
      </>
    );
}