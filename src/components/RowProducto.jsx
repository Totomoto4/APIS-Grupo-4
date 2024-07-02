import React from 'react';

function RowProducto({ producto, activarProducto }) {

    function handleRowClick() {
        activarProducto(producto);
    }


  const getImageSource = () => {
    if (!producto.imageData || typeof producto.imageData !== 'string') {
      return ''; // Manejar caso donde producto.image no está definido o no es una cadena válida
    }

    const base64Prefix = 'data:image/';
    let imageExtension = 'png'; // Por defecto PNG si no se detecta extensión

    // Detectar JPEG
    if (producto.imageData.startsWith('/9j/')) {
      imageExtension = 'jpeg';
    }

    // Detectar WebP
    if (producto.imageData.startsWith('UklGR')) {
      imageExtension = 'webp';
    }

    return `${base64Prefix}${imageExtension};base64, ${producto.imageData}`;
  };

  return (
    <tr key={producto.id} className={`product-row ${producto.stock < 1 ? "sin-stock" : ""}`}onClick={handleRowClick}>
      <td><img src={getImageSource()} height='30' alt={producto.name} /></td>
      <td>{producto.id}</td>
      <td>{producto.name}</td>
      <td>{producto.price}</td>
      <td>{producto.stock}</td>
    </tr>
  );
}

export default RowProducto;