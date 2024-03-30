// CartContext.js
import React, { createContext, useContext, useState } from 'react';
import products from '../data/products';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const productWithQuantity = { ...productToAdd, quantity: 1 };
      setCartItems(prevCartItems => [...prevCartItems, productWithQuantity]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const indexToRemove = cartItems.findIndex(item => item.id === productId);
    if (indexToRemove !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(indexToRemove, 1);
      setCartItems(updatedCartItems);
    }
  };

  const updateCartItemQuantity = (productId, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, updateCartItemQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
