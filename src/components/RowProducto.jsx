import { useState } from "react"

export default function RowProducto({producto}){

    const[activo, setActivo] = useState(false);

    function handleRowClick(producto){
        setActivo(true)
    }

    function renderRow(){
        if (activo){
            return (
                <tr key={producto.id} className="product-row" onClick={() => handleRowClick()}>
                <td><img src={producto.image} height='100'/></td>
                <td>{producto.id}</td>
                <td>{producto.name}</td>
                <td>{producto.price}</td>
                <td>{producto.stock}</td>
            </tr>
            );
        } else {
            return(
                <tr key={producto.id} className="product-row" onClick={() => handleRowClick()}>
                    <td><img src={producto.image} height='30'/></td>
                    <td>{producto.id}</td>
                    <td>{producto.name}</td>
                    <td>{producto.price}</td>
                    <td>{producto.stock}</td>
                </tr>
            )
        }
    }

    return(
        renderRow()
    )
}