import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ItemDetail;
