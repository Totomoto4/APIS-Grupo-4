import RowProducto from "./RowProducto"
import {products} from "../dummys/productsSimpsons"

import './TableProductos.css';
import { useState } from "react";

export default function TableProductos(){

    const [productoActivo, setProductoActivo] = useState();
    const [isUnderChanges, setIsUnderChanges] = useState(false);

    function activarProducto(producto){
      setProductoActivo(producto);
    }

    function desactivarProducto(){
      setIsUnderChanges(false)
      setProductoActivo(undefined);
    }

    function renderTable(){
      return(
        <table id="TABLE-GENERAL">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <RowProducto producto={producto} activarProducto={activarProducto}></RowProducto>
            ))}
          </tbody>
        </table>
      )
    }

    function renderProducto(){
      return (
        <div className="admin-product-container">
          <button onClick={desactivarProducto} id="boton-desactivador">
            X
          </button>
          <div className="admin-image-container">
            <img src={productoActivo.image} alt="imagen del producto" />
          </div>

          <section className="producto-info-admin">
            <table id="TABLE-INFO">
              <tr>
                <td className="left-header">Nombre</td>
                <td className="right-datacell">
                  {isUnderChanges ? <input type="text"  defaultValue={productoActivo.name} /> : <p>{productoActivo.name}</p>}
                </td>
              </tr>
              <tr>
                <td className="left-header">Descripcion</td>
                <td className="right-datacell">
                {isUnderChanges ? <input type="text"  defaultValue={productoActivo.description} /> : <p>{productoActivo.description}</p>}
                </td>
              </tr>
              <tr>
                <td className="left-header">Precio</td>
                <td className="right-datacell">
                {isUnderChanges ? <input type="number"  defaultValue={productoActivo.price} /> : <p>{productoActivo.price}</p>}
                </td>
              </tr>
              <tr>
                <td className="left-header">Stock</td>
                <td className="right-datacell">
                {isUnderChanges ? <input type="number"  defaultValue={productoActivo.stock} /> : <p>{productoActivo.stock}</p>}
                </td>
              </tr>
            </table>
            <button id="ACEPTAR-BTN" onClick={handleAceptarBTN}>{isUnderChanges ? "Aceptar" : "Modificar"}</button>
          </section>
        </div>
      );
    }

    function handleAceptarBTN(){
      if(isUnderChanges){
        setIsUnderChanges(false)
      } else {
        setIsUnderChanges(true)
      }
    }

    return(
        productoActivo ? renderProducto() : renderTable()
    );
}