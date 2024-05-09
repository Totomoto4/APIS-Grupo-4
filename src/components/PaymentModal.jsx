import React, { useState } from 'react';
import './PaymentModal.css';

const PaymentModal = ({ onConfirm, onClose }) => {
  const [name, setName] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}> X 
          &times;
        </span>
        <h2>Información de pago</h2>
        <input
          type="text"
          placeholder="Nombre del Titular"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Número de tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="input-field"
        />
        <button onClick={handleConfirm} className="confirm-button">
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;