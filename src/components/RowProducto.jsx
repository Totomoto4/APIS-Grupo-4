import { useState } from "react"

export default function RowProducto({producto, activarProducto}){

    function handleRowClick(){
        activarProducto(producto)
    }

    return(
        <tr key={producto.id} className={`product-row ${producto.stock < 1 ? "sin-stock" : undefined}`} onClick={() => handleRowClick()}>
                    <td><img src={producto.image} height='30'/></td>
                    <td>{producto.id}</td>
                    <td>{producto.name}</td>
                    <td>{producto.price}</td>
                    <td>{producto.stock}</td>
                </tr>
    )
}