// CartWidget.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../utils/CartContext';


const CartWidget = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;
