// ParentComponent.js
import React from 'react';
import ItemDetail from './ItemDetail'; // Importa el componente ItemDetail

const ParentComponent = () => {
  // Define la función handleAddToCart
  const handleAddToCart = (product) => {
    console.log('Producto añadido al carrito:', product);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Renderiza el componente ItemDetail y pasa handleAddToCart como prop */}
      <ItemDetail handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default ParentComponent;
