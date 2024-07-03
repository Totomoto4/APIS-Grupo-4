import React, { useState }from 'react';
import PropTypes from 'prop-types';
import './NewProd.css'; // Importa tu archivo CSS para los estilos
import { createProduct } from '../funcionesFetch/productFunctions';
import { useSelector } from 'react-redux';

function NewProdModal({ onClose, recargaProductos }) {
  const user = useSelector((state) => state.user.user);
  const [formState, setFormState] = useState({
    name: '',
    category: 'Comic',
    description: '',
    stock: 0,
    price: 0,
    image: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: name === 'image' ? files[0] : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("FormState enviado: " , formState);
    const response = await createProduct(formState, user.access_token);
    console.log('Form data:', formState);
    onClose();
    recargaProductos();
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
            <input className='newProdInput' type="text" name="name" placeholder="Nombre" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <select name="category" className="select-style newProdInput" required onChange={handleChange}>
              <option value="Comic">Comic</option>
              <option value="Funko">Funko</option>
              <option value="Juego">Juego</option>
              <option value="Ropa">Ropa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descripcion</label>
            <input className='newProdInput' type="text" name="description" placeholder="Descripcion" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cantidad</label>
            <input className='newProdInput' type="number" name='stock' placeholder='Cantidad' required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input className='newProdInput' type="number" name="price" placeholder="Precio" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input className='newProdInput' type="file" name="image" placeholder="Imagen" accept='image/png, image/jpeg'required onChange={handleChange} />
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
