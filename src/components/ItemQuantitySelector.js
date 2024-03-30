// ItemQuantitySelector.js
import React from 'react';
import { Button } from 'react-bootstrap';

const ItemQuantitySelector = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <Button variant="secondary" onClick={decreaseQuantity}>-</Button>
      <span>{quantity}</span>
      <Button variant="secondary" onClick={increaseQuantity}>+</Button>
    </div>
  );
};

export default ItemQuantitySelector;