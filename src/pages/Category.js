import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2>Category Page</h2>
      <p>Category ID: {categoryId}</p>
      {/* Contenido de la página de categoría */}
    </div>
  );
};

export default Category;
