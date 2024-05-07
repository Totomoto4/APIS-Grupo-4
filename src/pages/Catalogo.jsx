import { React, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx"; // Importa el componente de tarjeta de productos
import Footer from "../components/Footer.jsx";

import "./Catalogo.css";

import { products } from "../dummys/productsSimpsons.js";
import { useParams } from "react-router-dom";

const categories = ['Comic','Funko','Juego','Ropa'];

const categoryFilter = (category) =>{
  if (!categories.includes(category)) {
    return(products);
  } else {
    const filtered = products.filter(
      (product) => product.category === category
    );
    return(filtered);
  }
}

const searchBy = (term) => {
  if (term && term.trim() !== "") {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    return(filtered);
  } else {
    return(products);
  }
};


export default function Catalogo() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  const {categoria} = useParams();

  console.log(categoria);
  console.log(searchQuery);

  const [filteredProducts, setFilteredProducts] = useState(products);

  console.log(filteredProducts);

  useEffect(() => {
    let filtered =[];
    if(categoria){
      filtered = categoryFilter(categoria);
    } else{
      filtered = searchBy(searchQuery);
    }
    setFilteredProducts(filtered)
  }, [categoria, searchQuery]);
  
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
