import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AddItemButton from '../productComponents/addItemButton'; 
import { useCart } from '../utils/CartContext';
import "../App.css";

const Home = () => {
  const { handleAddToCart } = useCart(); // Obtiene la función handleAddToCart del contexto del carrito

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
              <Link to={`/item/${product.id}`} className="product-details">Ver detalles</Link>
              {/* Agrega el botón de comprar */}
              <button className="product-buy-button" onClick={() => handleAddToCart(product.id)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
