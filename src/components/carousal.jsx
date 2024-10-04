import React, { createRef } from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import commode from '../pictures/commode cleaning.jpg'
import washingmachine from '../pictures/Washingmachine.jpg'
import sofa from '../pictures/sofaa.jpg'

import plumber from '../pictures/plumber.jpg'
import painter from '../pictures/painter.jpg'
import barber from '../pictures/barber.jpg'
import electrician from '../pictures/electrician.jpg'
import tap from '../pictures/tap.jpg'


const HorizontalCarousel = () => {
  const cardData = [
    { id: 1, title: 'Intense bathroom cleaning ', price: '$99', imageUrl:commode, rating: '★★★★☆' },
    { id: 2, title: 'washing machine repair', price: '$120', imageUrl:washingmachine, rating: '★★★☆☆' },
    { id: 3, title: 'Hair cutting', price: '$150', imageUrl:barber, rating: '★★★★★' },
    { id: 4, title: 'Tap repair', price: '$80', imageUrl:tap, rating: '★★★☆☆' },
    { id: 5, title: 'Sofa cleaner', price: '$60', imageUrl:sofa, rating: '★★★★☆' },
    { id: 6, title: 'Plumber', price: '$200', imageUrl:plumber, rating: '★★★★★' },
    { id: 7, title: 'Painter', price: '$180', imageUrl:painter, rating: '★★☆☆☆' },
    { id: 8, title: 'Electrician', price: '$130', imageUrl:electrician, rating: '★★★★☆' }
  ];

  const carouselRef = createRef();

  const arrowStyle = {
    backgroundColor: 'black',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const arrowTextStyle = {
    fontSize: '24px',
    color: 'white'
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        {/* Left arrow */}
        <Col xs={1} className="d-flex justify-content-center align-items-center">
          <span
            style={arrowStyle}
            onClick={() => carouselRef.current.prev()} // Trigger carousel prev slide
          >
            <span style={arrowTextStyle}>&lt;</span>
          </span>
        </Col>

        {/* Cards */}
        <Col xs={10}>
          <Carousel
            indicators={false}
            interval={null}
            controls={false}
            ref={carouselRef} // Ref to control the carousel
          >
            {Array(Math.ceil(cardData.length / 4)).fill().map((_, idx) => (
              <Carousel.Item key={idx}>
                <Row className="justify-content-center">
                  {cardData.slice(idx * 4, (idx * 4) + 4).map((card) => (
                    <Col key={card.id} xs={6} md={3}>
                      <Card style={{ width: '100%', backgroundColor: 'white', border: 'none' }}>
                        <Card.Img variant="top" src={card.imageUrl} alt={card.title}
                         onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }} />
                        <Card.Body>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>Rating: {card.rating}</Card.Text>
                          <Card.Text>Price: {card.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Right arrow */}
        <Col xs={1} className="d-flex justify-content-center align-items-center">
          <span
            style={arrowStyle}
            onClick={() => carouselRef.current.next()} // Trigger carousel next slide
          >
            <span style={arrowTextStyle}>&gt;</span>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default HorizontalCarousel;
