import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";
import Header from "../components/Header.jsx";
import "./Homepage.css";
import logoGrande from "../imagenes/generales/apu.jpg";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../dummys/products.js";

export default function Homepage() {
    const { user, updateUser } = useContext(UserContext);
    console.log(user);
  
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const uniqueCategories = getUniqueCategories(products);
      setFilteredProducts(products);
      setCategories(uniqueCategories);
    }, []);
  
    const handleCategoryFilter = (category) => {
      if (category === "") {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
      }
    };
  
    const renderProducts = () => {
      return filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ));
    };
  
    return (
      <>
        <Header categories={categories} onCategoryFilter={handleCategoryFilter} />
        <main>
          <div className="product-container">{renderProducts()}</div>
        </main>
        <Footer />
      </>
    );
  }
  
  // Función auxiliar para obtener las categorías únicas
  const getUniqueCategories = (products) => {
    const categories = products.map((product) => product.category);
    return [...new Set(categories)];
  };