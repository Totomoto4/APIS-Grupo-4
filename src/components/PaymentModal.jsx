import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentModal.css"; // Asegúrate de incluir cualquier estilo adicional necesario

const PaymentModal = ({ onConfirm, onClose }) => {
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [address, setAddress] = useState("");

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h3>Información de pago</h3>
        <div className="shipping-address">
          <form>
            <div className="form-group">
              <label htmlFor="address">Dirección de envio</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="credit-card-wrapper">
          <Cards
            number={number}
            name={`${firstName} ${lastName}`}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
        <form>
        <div className="form-group">
            <label htmlFor="number">Numero de tarjeta</label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Nombre Completo del titular</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido del titular</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiry">Fecha de Expiración</label>
            <input
              type="text"
              className="form-control"
              id="expiry"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVV</label>
            <input
              type="tel"
              className="form-control"
              id="cvc"
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <button type="button" onClick={handleConfirm} className="btn btn-primary">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
