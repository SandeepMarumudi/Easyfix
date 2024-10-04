import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Cleaning=()=>{
    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg',
        'image4.jpg', 'image5.jpg', 'image6.jpg',
        'image7.jpg', 'image8.jpg', 'image9.jpg'
      ];
    return(
        <>
        <h1>select your service</h1>
        <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={4} className="mb-3">
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
        </>
    )
}
export default Cleaning



