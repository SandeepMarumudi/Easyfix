import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mcb from '../pictures/elctrician/mcb.jpg';
import wires from '../pictures/elctrician/wires.jpg';
import socket from '../pictures/elctrician/switch.jpg';
import bulb from '../pictures/elctrician/bulb1.jpg';
import inverter from '../pictures/elctrician/inverter.jpg';
import fan from '../pictures/elctrician/fan.jpg';
import expert from '../pictures/elctrician/expert.jpg';
import HorizontalCard from '../components/card';

const Elecrician = () => {
    const [card,setcard]=useState([])
  const images = [
    { img: mcb, title: 'Mcb',price:200 },
    { img: fan, title: 'Fan',price:300 },
    { img: bulb, title: 'Lights',price:400 },
    { img: socket, title: 'Switch & Socket',price:500 },
    { img: inverter, title: 'Inverter',price:600 },
    { img: wires, title: 'Wiring',price:200 },
    { img: socket, title: 'Consult Expert',price:200 },
    { img: mcb, title: 'Mcb',price:500 },
    { img: expert, title: 'Consult Expert',price:500 },
  ];
  const cardhandle=(img,title,price,id)=>{
    if(!card.some((c) => c.id === id)){
        const newcard={id,img,title,price}
        setcard([...card,newcard])
    }
  }

  return (
    <>
      <h1>Select the Service</h1>
      <Container>
        <Row>
          {/* Left Column with Image Grid Card */}
          <Col xs={12} lg={4} className="order-lg-1 order-1">
            <Card className="mb-3" style={{ width: '100%' }}>
              <Card.Body>
                <Row>
                  {images.map((image, index) => (
                    <Col key={index} xs={4} className="mb-2">
                      <img
                        src={image.img}
                        alt={`Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                        onClick={()=>cardhandle(image.img,image.title,image.price,index+1)}
                      />
                      <p className="text-center">{image.title}</p> {/* Centering text */}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column with Additional Data */}
          <Col xs={12} lg={8} className="order-lg-2 order-2">
          {
            card.map(each=>
                <>
                <HorizontalCard title={each.title} price={each.price} url={each.img}/>
                </>
            )
        }
          </Col>
        </Row>
      </Container>
      
      
    </>
  );
};

export default Elecrician;
