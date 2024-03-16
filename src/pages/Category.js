import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import "../App.css";

const Category = () => {
  const { categoryId } = useParams();

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
    <div>
      <h2 className='tituloCategorias'>Categoría: {categoryId}</h2>
      <ItemListContainer products={categoryProducts} />
    </div>
  );
};

export default Category;





