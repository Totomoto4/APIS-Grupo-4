import { React, useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";

import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx"; // Importa el componente de tarjeta de productos
import Footer from "../components/Footer.jsx";

import "./Catalogo.css";

import { products } from "../dummys/productsSimpsons.js";
import { Link, useParams } from "react-router-dom";


export default function Catalogo() {
  const categories = ['Comic','Funko','Juego','Ropa'];

  const {categoria} = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(categoria);

  useEffect(() => {
    handleCategoryFilter(categoria);
  }, [categoria]);

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


  const renderProducts = () => {
    return filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
    ));
  };

  return (
    <>
      <Header/>
      <main className="catalogo-main">
        <div className="catalogo-container">{renderProducts()}</div>
      </main>
      <Footer />
    </>
  );
}
