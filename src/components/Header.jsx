import React, { useState } from "react";
import logo from "../imagenes/generales/kiwi-logo-pequeño.png";
import "./Header.css";
import carritoIcono from "../imagenes/carrito_1.svg";
import ShoppingCart from "./ShoppingCart";
import Cart from "./Cart"; // Importar el componente Cart

function Header({ categories = [], onCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <>
      <nav id="navHeader">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>Kiwik-E-Mart</h1>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Buscar productos..." />
          <button type="button">Buscar</button>
        </div>
        <div className="links">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Todas las categorias</option>
            {categories.length > 0 &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
          {/* <ShoppingCart /> */}
          <button onClick={handleShowCartModal}>
            <img src={carritoIcono} alt="Carrito de compras" id="Icono-carrito"/>
          </button>
          <a href="#">Cuenta</a>
        </div>
      </nav>
      {showCartModal && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <span className="close-button" onClick={handleShowCartModal}>
              &times;
            </span>
            <Cart setShowCartModal={setShowCartModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;