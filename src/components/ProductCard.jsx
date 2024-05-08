import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: {...product, cantidad: 1} });
    toast(`${product.name} añadido al carrito`, {
      autoClose: 1500 // Duración del Toast: 1.5 segundos
    });
  };

  const renderStockPositivo = ()=>{
    return(
      <div className="add-to-cart-container">
        <button id="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    )
  }

  const renderStock0 = ()=>{
    return(
      <p id='SIN-STOCK'>Sin Stock</p>
    )
  }

  return (
    <div id="product-card">
      <Link to={`/producto/${product.id}`}>
        <img src={product.image} alt={product.name} id="product-image" />
        <h2 id="product-name">{product.name}</h2>
        <p id="product-description">{product.description}</p>
        <p id="product-price">S{product.price}</p>
      </Link>
      <ToastContainer />
      {product.stock > 0 ? renderStockPositivo() : renderStock0() }
      
    </div>
  );
}

export default ProductCard;