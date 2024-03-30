import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; 

const Item = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Busca el producto por su ID en los datos importados
    const foundProduct = products.find(product => product.id === parseInt(itemId));

    // Actualiza el estado con el producto encontrado
    setProduct(foundProduct);
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Otros detalles del producto */}
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default Item;
