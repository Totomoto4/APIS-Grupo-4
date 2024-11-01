import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './AdminInterface.css';
import TableProductos from '../components/TableProductos';

const AdminInterface = () => {
  return (
    <div>
      <Header />
      <main className="admin-main">
        <h1>Panel de administrador</h1>
        <div className="admin-container">
          <TableProductos />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminInterface;