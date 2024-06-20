import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: {...product, cantidad: 1} });
    toast.success(`${product.name} anadido al carrito`,{
      onClick: false 
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

  const getImageSource = () => {

    if (!product.imageData || typeof product.imageData !== 'string') {
      return ''; // Manejar caso donde product.imageData no está definido o no es una cadena válida
    }


    const base64Prefix = 'data:image/';
    let imageExtension = 'png'; // Default to PNG if no extension is detected

    // Detect JPEG
    if (product.imageData.startsWith('/9j/')) {
      imageExtension = 'jpeg';
    }

    // Detect WebP
    if (product.imageData.startsWith('UklGR')) {
      imageExtension = 'webp';
    }

    return `${base64Prefix}${imageExtension};base64, ${product.imageData}`;
  };

  return (
    <div id="product-card">
      <Link to={`/producto/${product.id}`}>
        <img src={getImageSource()} alt={product.name} id="product-image" />
        <h2 id="product-name">{product.name}</h2>
        <p id="product-description">{product.description}</p>
        <p id="product-price">S{product.price}</p>
      <Toaster />
      </Link>
      {product.stock > 0 ? renderStockPositivo() : renderStock0() }
      
    </div>
  );
}

export default ProductCard;