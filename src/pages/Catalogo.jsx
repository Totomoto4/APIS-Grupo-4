import { React, useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx"; // Importa el componente de tarjeta de productos
import Footer from "../components/Footer.jsx";

import "./Catalogo.css";

import { products } from "../dummys/productsSimpsons.js";
import { Link, useParams } from "react-router-dom";


export default function Catalogo() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const categories = ['Comic','Funko','Juego','Ropa'];

  const {categoria} = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(categoria);

  useEffect(() => {
    handleCategoryFilter(categoria);
    handleSearch(searchQuery);
  }, [categoria, searchQuery]);

  const handleCategoryFilter = (category) => {
    if (!categories.includes(category)) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (term) => {
    if (term && term.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const renderProducts = () => {
    return filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
    ));
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="catalogo-main">
        <div className="catalogo-container">{renderProducts()}</div>
      </main>
      <Footer />
    </>
  );
}
