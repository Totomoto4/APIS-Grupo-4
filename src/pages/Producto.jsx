import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard.jsx"

import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { products } from "../dummys/productsSimpsons.js";
import { Link, useParams} from "react-router-dom";
import { useState } from "react";

import './Producto.css'

const buscarProductoPorID = (id) =>{
    const idBuscado = parseInt(id);
    return products.find((productoCandidato) => productoCandidato.id === idBuscado)
}

export default function Producto(){

    const dispatch = useDispatch();

    const [cantidad, setCantidad] = useState(1);

    const {productoID} = useParams();
    
    const [productoActual, setProductoActual] = useState(buscarProductoPorID(productoID));

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
      toast(`${cantidad} ${productoActual.name} añadidos al carrito`, {
        autoClose: 1500
      });
    };

    const renderProducts = () => {
        return products.slice(0, 3).map((product) => (
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

    console.log(productoActual);
    console.log(productoID);

    return (
      <>
        <Header />
        <main className="product-main">
          <div className="container">
            <Link id="GOBACK" to={'/catalogo/'}>X</Link>
            <div className="product-container">
              <div className="product-image-container">
                <img src={productoActual.image} alt="imagen del producto" />
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
            <section className="recomendaciones">{renderProducts()}</section>
          </div>
        </main>
        <Footer />
      </>
    );
}