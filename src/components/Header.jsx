import React, { useState } from "react";
import logo from "../imagenes/generales/kiwi-logo-pequeño.png";
import "./Header.css";
import carritoIcono from "../imagenes/carrito_1.svg";

function Header({ categories = [], onCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryFilter(category);
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
          <a href="#" id="carrito-link">
            <img src={carritoIcono} alt="Carrito" id="carrito-icono" />
          </a>
          <a href="#">Cuenta</a>
        </div>
      </nav>
    </>
  );
}

export default Header;