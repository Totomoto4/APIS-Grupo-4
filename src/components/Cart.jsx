import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; 
import PaymentModal from './PaymentModal';
import { createOrder, verifyTotal } from '../funcionesFetch/orderFunctions';

const transformCart = (cart) => {
  return Object.keys(cart).reduce((acc, key) => {
    acc[key] = cart[key].cantidad;
    return acc;
  }, {});
};

const Cart = ({ setShowCartModal }) => {
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    const fetchTotal = async () => {
      const products = transformCart(cart);
      const requestBody = {
        productos: products,
        codigos: [discountCode]
      };
      try {
        const response = await verifyTotal(requestBody);
        console.log('Respuesta del servidor:', response);
        setTotal(response); 
      } catch (error) {
        console.error('Error al verificar el total:', error);
        setTotal(0); 
      }
    };

    fetchTotal(); 

  }, []); 


  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: productId } });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id: productId } });
  }

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) {
      alert('No hay productos en el carrito');
    } else {
      setShowPaymentModal(true);
    }
  };

  const handleConfirmPayment = async (body) => {

    const requestBody = {... body,
      email: user.email,
      total: total,
      products: transformCart(cart),
      codigos: [discountCode]
    }

    console.log(requestBody);
    
    const response = await createOrder(requestBody, user.access_token)

    alert('Compra realizada con éxito');
    dispatch({ type: 'CLEAR_CART' });
    setShowCartModal(false); 
    setShowPaymentModal(false); 
  };

  const applyDiscount = async () => {
    const products = transformCart(cart);
    const requestBody = {
      productos : products,
      codigos: [discountCode]
    }

    try{
      const result = await verifyTotal(requestBody);
      setTotal(result);
    }catch(error){
      console.log(error)
    }
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
    setShowPaymentModal(false); 
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrito</h2>
        <button className="custom-close-button" onClick={handleCloseCart}>x</button>
      </div>
      {Object.keys(cart).length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <ul>
            {Object.entries(cart).map(([productId, { product, cantidad }]) => (
              <li key={productId}>
                {product.name} - 
                <button className='remove-button' onClick={() => handleRemoveFromCart(productId)}>
                  🗑️ {/* Tacho de basura */}
                </button>
                ${product.price} x {cantidad}
                <button className="decrease-button" onClick={() => handleDecreaseQuantity(productId)}>
                  &#x2B07; {/* Flecha hacia abajo */}
                </button>
                <button className="increase-button" onClick={() => handleIncreaseQuantity(productId)}>
                  &#x2B06; {/* Flecha hacia arriba */}
                </button>
              </li>
            ))}
          </ul>
          <div className="discount-input">
            <label htmlFor="discountCode">Código de Descuento:</label>
            <input
              type="text"
              id="discountCode"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button className="apply-discount-button" onClick={applyDiscount}>
              Aplicar
            </button>
          </div>
          <p>Total: {total}</p>
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      )}
      {showPaymentModal && (
        <PaymentModal
          total={total}
          onConfirm={handleConfirmPayment}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
};

export default Cart;
