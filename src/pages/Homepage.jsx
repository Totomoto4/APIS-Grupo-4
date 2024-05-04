import {React, useState, useEffect, useContext} from "react";
import { UserContext } from "../context/UserContext.tsx";

import "./Homepage.css";

import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer.jsx";

import { products } from "../dummys/productsSimpsons.js";

export default function Homepage() {
  const { user, updateUser } = useContext(UserContext);
  console.log(user);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleCategoryFilter = (category) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Header/>
      <main>
        <h1>Agregar pagina principal!</h1>
      </main>
      <Footer />
    </>
  );
}
