import React from 'react';
import products from '../data/products'; 

const ItemDetailContainer = ({ match }) => {
  
  if (!match || !match.params) {
    return <p>No se proporcionaron parámetros de ruta</p>;
  }

  const productId = parseInt(match.params.id);
  const product = products.find(product => product.id === productId);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Otros detalles del producto */}
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

