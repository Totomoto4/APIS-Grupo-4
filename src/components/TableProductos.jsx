import RowProducto from "./RowProducto"
import {products} from "../dummys/productsSimpsons"

import './TableProductos.css';
import { useState } from "react";

export default function TableProductos(){

    const [productoActivo, setProductoActivo] = useState();

    return(
        <>
        <table>
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
              <RowProducto producto={producto}></RowProducto>
            ))}
          </tbody>
        </table>
        </>
    )
}