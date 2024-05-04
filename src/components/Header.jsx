import React, { useState } from "react";
import logo from "../imagenes/generales/kiwi-logo-pequeño.png";
import "./Header.css";
import carritoIcono from "../imagenes/generales/carrito_1.svg";
import Cart from "./Cart"; // Importar el componente Cart
import DropdownCategorias from "./DropdownCategorias";
import Account from "./Account";

function Header() {

  const [showCartModal, setShowCartModal] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleToggleMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  return (
    <header>
      <div className="logo-container">
        <img href="Homepage" src={logo} alt="Logo" />
        <h1>Kiwik-E-Mart</h1>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Buscar productos..." />
        <button type="button">Buscar</button>
      </div>

      <div className="links">
        <DropdownCategorias></DropdownCategorias>

        {/* <ShoppingCart /> */}
        <button onClick={handleShowCartModal}>
          <img src={carritoIcono} alt="Carrito de compras" id="Icono-carrito" />
        </button>

        <Account></Account>
      </div>

      {showCartModal && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <span className="close-button" onClick={handleShowCartModal}>
              X
            </span>
            <Cart setShowCartModal={setShowCartModal} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


