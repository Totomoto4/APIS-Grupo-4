import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'; // Importa tu archivo CSS
import PaymentModal from './PaymentModal';

const Cart = ({ setShowCartModal }) => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const calculateTotal = () => {
    let total = Object.values(cart).reduce((acc, { product, cantidad }) => {
      return acc + product.price * cantidad;
    }, 0);

    // Aplicar descuento si está activo
    if (discountApplied) {
      // Lógica para aplicar descuento (ejemplo: 10%)
      total *= 0.9; // Reducir el total en un 10%
    }

    return total.toFixed(2); // Asegurarse de devolver el total con dos decimales
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
    setShowCartModal(false); // Cerrar el modal del carrito
    setShowPaymentModal(false); // Cerrar el modal de pago
  };

  const applyDiscount = () => {
    // Aquí podrías validar el código de descuento si es necesario
    setDiscountApplied(true);
  };

  const handleCloseCart = () => {
    setShowCartModal(false); // Cerrar el modal del carrito
    setShowPaymentModal(false); // Cerrar el modal de pago
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
                {product.name} - ${product.price} x {cantidad}
                <button className="remove-button" onClick={() => handleRemoveFromCart(productId)}>
                  &#x2B07; {/* Flecha hacia abajo */}
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
