import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import ProductCard from "../components/ProductCard.jsx"; // Importa el componente de tarjeta de productos
import Footer from "../components/Footer.jsx";
import { fetchAllProducts, fetchProductsByCategory } from "../funcionesFetch/productFunctions.js";

import "./Catalogo.css";

import { useParams } from "react-router-dom";

const searchBy = (term, productosIniciales) => {
  if (term && term.trim() !== "") {
    const filtered = productosIniciales.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    return(filtered);
  } else {
    return([]);
  }
};

export default function Catalogo() {

  const location = useLocation()

  const searchQuery = new URLSearchParams(location.search).get("search");

  const {categoria} = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let fetchedProducts = [];
        if(categoria){
          fetchedProducts = await fetchProductsByCategory(categoria);
        } else {
          fetchedProducts = await fetchAllProducts(); // Espera a que la promesa se resuelva y obtiene los productos
          if(searchQuery){
            fetchedProducts = searchBy(searchQuery,fetchedProducts);
          }
        }
        
        console.log('Productos obtenidos:', fetchedProducts); // Verifica que obtienes el array de productos
        setFilteredProducts(fetchedProducts); // Actualiza el estado con los productos obtenidos
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };  

    loadProducts(); // Llama a la función asincrónica para cargar los productos
  }, [categoria, searchQuery]); 

  const renderProducts = () => {
    if(filteredProducts.length === 0){
      return(
        <div>
          <h2>Ay caramba!</h2>
          <p>No hay productos para esa busqueda!</p>
        </div>
      )
    }
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
