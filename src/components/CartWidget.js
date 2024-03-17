import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
