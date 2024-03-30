import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../FirebaseConfig';
import "../App.css";

function Auth({ closeModal, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      setUser(user); // Actualiza el estado del usuario en App
      closeModal(); // Cierra el modal después del inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Actualiza el estado del usuario en App a null
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      setUser(user);
      closeModal();
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <Container>
      <h2>Iniciar Sesión</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <div className="d-flex justify-content-evenly p-3">
          <Button variant="primary" type="button" onClick={SignIn} className="auth-button">
            Iniciar Sesión
          </Button>

          <Button onClick={signInWithGoogle} className="product-buy-button">
            Ingresar con Google
          </Button>

          <Button variant="outline-danger" onClick={logOut}>
            Salir
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Auth;
