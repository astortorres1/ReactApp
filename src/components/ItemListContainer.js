import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddItemButton from '../productComponents/addItemButton'; // Importa el componente AddItemButton

const ItemListContainer = ({ products }) => {
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
                <AddItemButton onClick={() => console.log(`Agregar ${product.title} al carrito`)} style={{ border: '1px solid red' }}>
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

