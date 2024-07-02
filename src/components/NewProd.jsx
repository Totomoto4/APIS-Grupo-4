import React from 'react'

import './NewProd.css';

function NewProd() {
  return (
    <div className='NewProd-Conteiner'>
        <h1>Nuevo Producto</h1>
        <div className='NewBox'>
            <div className='formNewProd'>
                <form>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Nombre" required></input>
                    <label>Descripcion</label>
                    <input type="text" name="descripcion" placeholder="Descripcion" required></input>
                    <label>Precio</label>
                    <input type="number" name="precio" placeholder="Precio" required></input>
                    <label>Categoria</label>
                    <select name="categoria" required>
                        <option value="1">Comic</option>
                        <option value="2">Funko</option>
                        <option value="3">Juego</option>
                        <option value="4">Ropa</option>
                    </select>
                </form> 
            </div>
            <button id='CONFIRMAR-BTN'>Confirmar</button>
        </div>
    </div>
  )
}

export default NewProd
