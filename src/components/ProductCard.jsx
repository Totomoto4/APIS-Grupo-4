import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div id="product-card">
            <img src={product.image} alt={product.name} id="product-image" />
            <div id="product-details">
                <h2 id="product-name">{product.name}</h2>
                <p id="product-description">{product.description}</p>
                <p id="product-price">${product.price}</p>
                <button id="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;