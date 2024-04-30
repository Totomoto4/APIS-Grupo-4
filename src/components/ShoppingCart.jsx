import React, { useState } from 'react';
import carrito_1 from '../imagenes/carrito_1.svg';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import Header from './Header';

export default function ShoppingCart() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className="ShoppingCart">
      <Popover open={isPopoverOpen}>
        <PopoverTrigger>
          <img
            src={carrito_1}
            alt="Carrito"
            id="Icono-carrito"
            onClick={handlePopoverOpen}
            className="me-2"
            style={{ cursor: 'pointer' }}
          />
        </PopoverTrigger>
        <PopoverContent className='PopOverContent'>
          <button className='ExitPopover' onClick={handlePopoverClose}>X</button>
          {/* Contenido del popover aca */}
          <p>Contenido del popover</p>
          <button href="#" className='FinalizarCompra'>Finalizar compra</button>
        </PopoverContent>
      </Popover>
    </div>
  );
}