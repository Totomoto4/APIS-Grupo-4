import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; // Importa tu archivo CSS
import PaymentModal from './PaymentModal';

const Cart = ({ setShowCartModal }) => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce((total, { product, cantidad }) => {
      return total + product.price * cantidad;
    }, 0);
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) {
      alert('No hay productos en el carrito');
    } else {
      setShowPaymentModal(true);
    }
  };

  const handleConfirmPayment = () => {
    alert('Compra realizada con éxito');
    dispatch({ type: 'CLEAR_CART' });
    setShowCartModal(false);
    setShowPaymentModal(false);
  };

  return (
    <div>
      <h2>Carrito</h2>
      {Object.keys(cart).length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <ul>
            {Object.entries(cart).map(([productId, { product, cantidad }]) => (
              <li key={productId}>
                {product.name} - ${product.price} x {cantidad}
                <button className="remove-button" onClick={() => handleRemoveFromCart(productId)}>
                  -
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      )}
      {showPaymentModal && (
        <PaymentModal
          onConfirm={handleConfirmPayment}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
};

export default Cart;
