import React from 'react';

const ItemQuantitySelector = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
