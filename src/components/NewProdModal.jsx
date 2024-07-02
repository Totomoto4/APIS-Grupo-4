import React from 'react';
import PropTypes from 'prop-types';
import './NewProd.css'; // Importa tu archivo CSS para los estilos

function NewProdModal({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario aquí
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
         <div className='form-grid'>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <select name="categoria" className="select-style" required>
              <option value="1">Comic</option>
              <option value="2">Funko</option>
              <option value="3">Juego</option>
              <option value="4">Ropa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descripcion</label>
            <input type="text" name="descripcion" placeholder="Descripcion" required />
          </div>
          <div className="form-group">
            <label>Cantidad</label>
            <input type="number" name='cantidad' placeholder='Cantidad' required />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="number" name="precio" placeholder="Precio" required />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input type="file" name="imagen" placeholder="Imagen" required />
          </div>
          <button type="submit" id='CONFIRMAR-BTN'>Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

NewProdModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewProdModal;
