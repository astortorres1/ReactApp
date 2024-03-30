// CartPage.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/CartContext';
import Auth from '../components/auth';
import ItemQuantitySelector from '../components/ItemQuantitySelector';
import '../Cart.css';

const CartPage = () => {
  const { cartItems, handleRemoveFromCart, getTotalPrice, updateCartItemQuantity } = useCart();
  const [showAuth, setShowAuth] = useState(false);

  const handleCheckout = () => {
    alert('Por favor inicia sesión para proceder al checkout.');
    setShowAuth(true);
  };

  const closeModal = () => {
    setShowAuth(false);
  };

  const increaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, 1);
  };

  const decreaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, -1);
  };

  return (
    <Container>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <ItemQuantitySelector 
                  quantity={item.quantity} 
                  increaseQuantity={() => increaseQuantity(item.id)} 
                  decreaseQuantity={() => decreaseQuantity(item.id)} 
                />
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</Button>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
          <div className="cart-actions d-flex justify-content-evenly">
            <Button variant="success" className="btn-checkout" onClick={handleCheckout}>Checkout</Button>
            <Link to="/" className="btn-continue btn btn-primary">Seguir comprando</Link>
          </div>
          {showAuth && <Auth closeModal={closeModal} />}
        </>
      )}
    </Container>
  );
};

export default CartPage;