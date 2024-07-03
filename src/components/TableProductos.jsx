import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RowProducto from "./RowProducto";
import { deleteProduct, fetchAllProducts, updateProduct } from '../funcionesFetch/productFunctions'; // Asegúrate de importar correctamente
import './TableProductos.css';
import NewProdModal from "./NewProdModal";


export default function TableProductos() {
    const user = useSelector((state) => state.user.user);
    const [productos, setProductos] = useState([]);
    const [productoActivo, setProductoActivo] = useState();
    const [isUnderChanges, setIsUnderChanges] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [controladorDeCarga, setControlador] = useState(true);

    useEffect(() => {
        console.log("Use efect ejecutado");
        async function getProducts() {
            try {
                const data = await fetchAllProducts();
                setProductos(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        getProducts();
    }, [controladorDeCarga]);

    function activarProducto(producto) {
        setProductoActivo(producto);
    }

    function desactivarProducto() {
        setIsUnderChanges(false);
        setProductoActivo(undefined);
        recargarProductos();
    }

    const handleAgregarProducto = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const recargarProductos = () => {
        setControlador(!controladorDeCarga);
    }

    const handleEliminarProducto = () => {
        if (productoActivo) {
            try {
                deleteProduct(productoActivo.id, user.access_token);
                desactivarProducto();
                recargarProductos();
            } catch(error){
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setProductoActivo(prevState => ({
          ...prevState,
          [name]: name === 'imagen' ? files[0] : value
        }));
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
                                    {isUnderChanges ? <input name='name' type="text" defaultValue={productoActivo.name} onChange={handleChange}/> : <p>{productoActivo.name}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Descripcion</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input name='description' type="text" defaultValue={productoActivo.description} onChange={handleChange}/> : <p>{productoActivo.description}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Precio</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input name='price' type="number" defaultValue={productoActivo.price} onChange={handleChange}/> : <p>{productoActivo.price}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className="left-header">Stock</td>
                                <td className="right-datacell">
                                    {isUnderChanges ? <input name='stock' type="number" defaultValue={productoActivo.stock} onChange={handleChange}/> : <p>{productoActivo.stock}</p>}
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

    const handleAceptarBTN = () => {
        if (isUnderChanges) {
            updateProduct(productoActivo, user.access_token)
            setIsUnderChanges(false);
            
        } else {
            setIsUnderChanges(true);
        }
    }

    return (
        <>
            {productoActivo ? renderProducto() : renderTable()}
            {showModal && <NewProdModal recargaProductos={recargarProductos} onClose={closeModal} />}
        </>
    );
}