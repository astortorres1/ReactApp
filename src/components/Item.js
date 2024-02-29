import React from 'react';

const Item = ({ product }) => {
  return (
    <li>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>Precio: ${product.price}</p>
      {/* Otros detalles del producto que desees mostrar */}
    </li>
  );
};

export default Item;
