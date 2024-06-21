import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentModal.css";

const PaymentModal = ({ onConfirm, onClose, total }) => {
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [address, setAddress] = useState("");

  const validarCVV = (cvc) => {
    const regex = /^[0-9]{3}$/;
    return regex.test(cvc);
  };

  const validarTarjeta = (number) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(number);
  };

  const validarFechaExpiracion = (fecha) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!regex.test(fecha)) {
      return false;
    }
    const [mes, año] = fecha.split('/');
    const mesActual = new Date().getMonth() + 1;
    const añoActual = new Date().getFullYear() % 100;
    return (parseInt(año) > añoActual || (parseInt(año) === añoActual && parseInt(mes) >= mesActual));
  };

  const handleConfirm = () => {
    if (!validarCVV(cvc)) {
      alert("CVV no es válido");
      return;
    }

    if (!validarTarjeta(number)) {
      alert("Número de tarjeta no es válido");
      return;
    }

    if (!validarFechaExpiracion(expiry)) {
      alert("Fecha de expiración no es válida");
      return;
    }

    alert(`Total a pagar: ${total.toFixed(2)}`);

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
              <label htmlFor="address">Dirección de envío</label>
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
            <label htmlFor="number">Número de tarjeta</label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value.slice(0, 16))}
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
              onChange={(e) => setExpiry(e.target.value.slice(0, 6))}
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
              onChange={(e) => setCvc(e.target.value.slice(0, 3))}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="total">Total</label>
            <input
              type="number"
              className="form-control"
              id="total"
              name="total"
              value={total.toFixed(2)}
              readOnly
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
