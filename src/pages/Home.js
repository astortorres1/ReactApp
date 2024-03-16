import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { Link } from 'react-router-dom';
import products from '../data/products';
import "../App.css";

const Home = () => {
  const handleItemClick = (productId) => {
    // Puedes hacer algo con el productId si es necesario antes de navegar
    console.log(`Clic en el producto con ID: ${productId}`);
  };

  return (
    <div>
      <h1 className='titulo'>Bienvenido a Mi Tienda</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <Link to={`/item/${product.id}`}>Ver Detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

