import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h2>Item Page</h2>
      <p>Item ID: {itemId}</p>
      {/* Contenido de la página de artículo */}
    </div>
  );
};

export default Item;
