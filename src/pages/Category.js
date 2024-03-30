import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../utils/CartContext';

import "../styles.css"; // Ajusta la ruta de importación según la estructura de tu proyecto

const Category = () => {
  const { handleAddToCart } = useCart(); // Obtiene la función handleAddToCart del contexto del carrito
  const { categoryId } = useParams(); // Utiliza useParams para obtener el parámetro de la URL

  // Filtrar productos por categoría y por ID
  const categoryProducts = products.filter((product) => {
    const id = product.id;
    const isClothing = categoryId.toLowerCase() === 'clothing';
    const isElectronics = categoryId.toLowerCase() === 'electronics';

    if (
      (isClothing && ((id >= 1 && id <= 8) || (id >= 15 && id <= 20))) ||
      (isElectronics && (id >= 9 && id <= 14))
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className="category-container">
      <h2 className='category-title'>Categoría: {categoryId}</h2>
      <div className="product-grid">
        {categoryProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <div className="product-actions">
                {/* Enlace para ver detalles */}
                <Link to={`/item/${product.id}`} className="product-details">Ver detalles</Link>
                {/* Botón para comprar */}
                <button className="product-buy-button" onClick={() => handleAddToCart(product.id)}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
