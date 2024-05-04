import React, { useState } from "react";
import logo from "../imagenes/generales/kiwi-logo-pequeño.png";
import "./Header.css";
import carritoIcono from "../imagenes/generales/carrito_1.svg";
import Cart from "./Cart"; // Importar el componente Cart
import DropdownCategorias from "./DropdownCategorias";
import Account from "./Account";

function Header({ onSearch = () => {} }){

  const [showCartModal, setShowCartModal] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleToggleMode = () => {
    setIsAdminMode(!isAdminMode);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <header>
      <div className="logo-container">
        <img href="Homepage" src={logo} alt="Logo" />
        <h1>Kiwik-E-Mart</h1>
      </div>

      <form className="searchBox" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="links">
        <DropdownCategorias></DropdownCategorias>

        {/* <ShoppingCart /> */}
        <button onClick={handleShowCartModal} id="carritobtn">
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


