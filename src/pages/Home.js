import React from 'react';
import NavBar from '../components/NavBar';
import products from '../data/products';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Barra de Navegación */}
      <NavBar />

      {/* Contenido de la página de inicio */}
      <h2>Home Page</h2>

      {/* Mostrar productos */}
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3 className="product-title">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            {/* Otros detalles del producto */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
