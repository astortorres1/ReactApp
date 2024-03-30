// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Home from './pages/Home';
import Category from './pages/Category';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import { CartProvider } from './utils/CartContext';
import Auth from './components/auth';
import { auth } from './FirebaseConfig';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <CartProvider>
      <Router>
        <NavBar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:productId" element={<ItemDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<Auth setUser={setUser} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
