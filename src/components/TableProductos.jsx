import React, { useEffect, useState } from 'react';
import RowProducto from "./RowProducto";
import { fetchAllProducts } from '../funcionesFetch/productFunctions'; // Asegúrate de importar correctamente
import './TableProductos.css';
import NewProdModal from "./NewProdModal";
import { useNavigate } from 'react-router-dom';

export default function TableProductos() {
    const [productos, setProductos] = useState([]);
    const [productoActivo, setProductoActivo] = useState();
    const [isUnderChanges, setIsUnderChanges] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProducts() {
            try {
                const data = await fetchAllProducts();
                setProductos(data);
                console.log("Productos obtenidos:", data); // Verificar si los productos se obtienen correctamente
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        getProducts();
    }, []);

    function activarProducto(producto) {
        setProductoActivo(producto);
    }

    function desactivarProducto() {
        setIsUnderChanges(false);
        setProductoActivo(undefined);
    }

    const handleAgregarProducto = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleEliminarProducto = () => {
        if (productoActivo) {
            const updatedProducts = productos.filter(prod => prod.id !== productoActivo.id);
            setProductos(updatedProducts);
            desactivarProducto();
        }
    };

    function renderTable() {
        return (
            <table id="TABLE-GENERAL">
                <thead>
                    <tr>
                        <th><button id='AGREGAR-PROD' onClick={handleAgregarProducto}>Agregar Producto</button></th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <RowProducto key={producto.id} producto={producto} activarProducto={activarProducto} />
                    ))}
                </tbody>
            </table>
        );
    }

    function renderProducto() {

      const getImageSource = () => {
        if (!productoActivo.imageData || typeof productoActivo.imageData !== 'string') {
          return ''; // Manejar caso donde productoActivo.image no está definido o no es una cadena válida
        }
    
        const base64Prefix = 'data:image/';
        let imageExtension = 'png'; // Por defecto PNG si no se detecta extensión
    
        // Detectar JPEG
        if (productoActivo.imageData.startsWith('/9j/')) {
          imageExtension = 'jpeg';
        }
    
        // Detectar WebP
        if (productoActivo.imageData.startsWith('UklGR')) {
          imageExtension = 'webp';
        }
    
        return `${base64Prefix}${imageExtension};base64, ${productoActivo.imageData}`;
      };
    

        return (
            <div className="admin-product-container">
                <button onClick={desactivarProducto} id="boton-desactivador">
                    X
                </button>
                <div className="admin-image-container">
                    {productoActivo && <img src={getImageSource()} alt="imagen del producto" />}
                </div>

                <section className="producto-info-admin">
                    <table id="TABLE-INFO">
                        <tbody>
                            <tr>
                                <td className="left-header">Nombre</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input type="text" defaultValue={productoActivo.name} /> : <p>{productoActivo.name}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Descripcion</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input type="text" defaultValue={productoActivo.description} /> : <p>{productoActivo.description}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Precio</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input type="number" defaultValue={productoActivo.price} /> : <p>{productoActivo.price}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Stock</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input type="number" defaultValue={productoActivo.stock} /> : <p>{productoActivo.stock}</p>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="ACEPTAR-BTN" onClick={handleAceptarBTN}>{isUnderChanges ? "Aceptar" : "Modificar"}</button>
                    <button id="ELIMINAR-BTN" onClick={handleEliminarProducto}>Eliminar Producto</button>
                </section>
            </div>
        );
    }

    function handleAceptarBTN() {
        if (isUnderChanges) {
            setIsUnderChanges(false);
        } else {
            setIsUnderChanges(true);
        }
    }

    return (
        <>
            {productoActivo ? renderProducto() : renderTable()}
            {showModal && <NewProdModal onClose={closeModal} />}
        </>
    );
}