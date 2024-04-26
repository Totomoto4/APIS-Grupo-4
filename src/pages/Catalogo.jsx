import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.tsx';
import Header from '../components/Header.jsx';
import ProductCard from '../components/ProductCard.jsx'; // Importa el componente de tarjeta de productos
import { Link } from 'react-router-dom';
import './Homepage.css';
import { products } from '../dummys/products.js'



export default function Homepage(){

    const { user, updateUser } = useContext(UserContext);
    console.log(user);

    return(
        <section>
            <Header />
            <div className="content">

                {/* Renderiza las tarjetas de productos */}
                <div className="product-cards">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}