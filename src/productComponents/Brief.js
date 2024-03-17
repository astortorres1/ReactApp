import React from 'react';

const Brief = ({ price, quantity, onQuantityChange, onAddToCart }) => {
  return (
    <div>
      <p>Price: ${price}</p>
      <ItemQuantitySelector quantity={quantity} onQuantityChange={onQuantityChange} />
      <AddItemButton onClick={onAddToCart} />
    </div>
  );
};

export default Brief;
