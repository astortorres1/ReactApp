import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddItemButton from '../productComponents/addItemButton';
import { useCart } from '../utils/CartContext';


const ItemListContainer = ({ products }) => {
  const { handleAddToCart } = useCart(); // Obtenemos la función handleAddToCart del contexto del carrito

  return (
    <Container>
      <h2>Lista de Productos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} style={{ marginBottom: '20px' }}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/item/${product.id}`}>Ver Detalles</Link>
                <AddItemButton onClick={() => handleAddToCart(product.id)} style={{ border: '1px solid red' }}>
                  Comprar
                </AddItemButton>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
