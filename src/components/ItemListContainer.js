import React from 'react';
import products from '../data/products'; 
const ItemListContainer = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Precio: ${product.price}</p>
            {/* Otros detalles del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
