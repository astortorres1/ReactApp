import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; // Nuevo componente para mapear la data
import productsApi from '../data/products'; // Archivo con la promesa simulada

const ItemListContainer = ({ categoryId }) => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    // Simulación de carga de productos
    productsApi.getProducts(categoryId)
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]); // Ejecuta el efecto cada vez que cambia categoryId

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

