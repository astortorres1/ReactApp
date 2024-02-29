import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; // Nuevo componente para la vista del detalle
import products from '../data/products'; // Ajusta la ruta según tu estructura de carpetas

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find(product => product.id === productId);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

