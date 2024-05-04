import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import { USUARIOS } from '../dummys/usuariosDummy';
import Footer from './Footer';

const AdminInterface = ({ products, nombreUsuario }) => {
  return (
    <div>
      <Header />
      <h1>Panel de Administrador</h1>
      <ProductCard products={products} />
      <USUARIOS user={nombreUsuario} />
      <Footer />
    </div>
  );
}

export default AdminInterface;