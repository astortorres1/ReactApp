// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Home from './pages/Home';
import Category from './pages/Category';
import NavBar from './components/NavBar';
import products from './data/products'; // Importa tu lista de productos

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:productId" element={<ItemDetail products={products} />} /> {/* Pasa los productos como una propiedad */}
        <Route path="/items" element={<ItemListContainer products={products} />} /> {/* Pasa los productos como una propiedad */}
      </Routes>
    </Router>
  );
};

export default App;
