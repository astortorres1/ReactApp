import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import products from '../data/products'; // Ajusta la ruta según tu estructura de carpetas

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simula una llamada asíncrona a la API para obtener el detalle del producto
    const fetchProduct = () => {
      const selectedProduct = products.find(p => p.id === parseInt(id));
      setProduct(selectedProduct);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;


