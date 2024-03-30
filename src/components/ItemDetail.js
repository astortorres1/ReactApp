import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import '../App.css'; 

const ItemDetail = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-description">{product.description}</div>
      <div className="product-detail-price">Precio: ${product.price}</div>
    </div>
  );
};

export default ItemDetail;

