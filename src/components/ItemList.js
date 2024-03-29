import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ItemList;
