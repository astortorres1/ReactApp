import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/item/${product.id}`}>Ver Detalles</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
