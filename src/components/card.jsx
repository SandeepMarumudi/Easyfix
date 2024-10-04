import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const HorizontalCard = ({title,price,url,add}) => {
  return (
    <Card style={{ width: '100%', padding: '10px', borderRadius: '10px' }}>
      <Row className="align-items-center">
        {/* Left Side (Title, Rating, and Price) */}
        <Col xs={8}>
          <Card.Body>
                {/* Title */}
                <Card.Title className="mb-2">{title}</Card.Title>
            {/* Rating */}
            <div className="mb-2">
              <span role="img" aria-label="rating">⭐⭐⭐⭐⭐</span> {/* Adjust this for dynamic rating */}
            </div>
            {/* Price */}
            <Card.Text>
              <strong>Rs {price}</strong>
            </Card.Text>
          </Card.Body>
        </Col>

        {/* Right Side (Image and Add Button) */}
        <Col xs={4} className="text-center">
          <Card.Img 
            variant="top" 
            src={url}
            alt="Product Image" 
            style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }}
          /><br></br>
          {/* Add Button */}
          <Button variant="primary" onClick={add}>Add</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
