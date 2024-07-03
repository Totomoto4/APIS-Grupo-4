import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RowProducto from "./RowProducto";
import { deleteProduct, fetchAllProducts } from '../funcionesFetch/productFunctions'; // Asegúrate de importar correctamente
import './TableProductos.css';
import NewProdModal from "./NewProdModal";


export default function TableProductos() {
    const user = useSelector((state) => state.user.user);
    const [productos, setProductos] = useState([]);
    const [productoActivo, setProductoActivo] = useState();
    const [isUnderChanges, setIsUnderChanges] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
    }, [productoActivo]);

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
            try {
                deleteProduct(productoActivo.id, user.access_token);
                desactivarProducto();
            } catch(error){
                console.log(error);
            }
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