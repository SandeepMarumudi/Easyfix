import { Col, Container, Row } from 'react-bootstrap';
import ac from '../pictures/ac repairer.jpg';
import carpenter from '../pictures/carpenter.jpg';
import cleaner from '../pictures/cleaner.jpg';
import electrician from '../pictures/electrician.jpg';
import painter from '../pictures/painter.jpg';
import pest from '../pictures/pest control.jpg';
import plumber from '../pictures/plumber.jpg';
import ac_cleaner from '../pictures/ac cleaner.jpg';
import commode from '../pictures/commode.jpg';
import fan from '../pictures/fan.jpg';
import washingmachine from '../pictures/washingmachine.jpg';
import { CiStar } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';
import HorizontalCarousel from '../components/carousal';
import StyledHeading from '../components/heading';
import { Link } from 'react-router-dom';

// Inline styles for the image highlight on hover
const serviceImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const hoverEffectStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

const rowSpanStyle = {
  gridRow: 'span 2',
  height: '300px',
};

const containerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const marqueeStyle = {
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  position: 'relative',
  background: 'linear-gradient(90deg, #f8f9fa, #e9ecef)',
  padding: '10px 20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const textStyle = {
  display: 'inline-block',
  paddingLeft: '100%',
  fontSize: '20px',
  fontWeight: '600',
  color: '#343a40',
  animation: 'marquee 45s linear infinite',
};

const marqueeKeyframes = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`;

const addMarqueeKeyframes = () => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(marqueeKeyframes, styleSheet.cssRules.length);
};

const Home = () => {
  addMarqueeKeyframes();

  const imageData = [
    { img: ac, name: 'AC & Appliance Repair',path:'/ac' },
    { img: cleaner, name: 'Cleaning',path:'/cleaning' },
    { img: electrician, name: 'Electrician',path:'/electrician' },
    { img: painter, name: 'Painting & Waterproofing',path:'/painting' },
    { img: plumber, name: 'Plumber',path:'/plumber' },
    { img: carpenter, name: 'Carpenter',path:'/carpenter' },
    { img: pest, name: 'Pest Control',path:'/pest' },
  ];

  return (
    <>
      <div style={marqueeStyle}>
        <p style={textStyle}>
          Welcome to our service page! Find the best home services here.
          Electricians, plumbers, cleaners, and more!
        </p>
      </div>
      
      <Container className="my-5">
        <Row>
          {/* First container for the first set of images */}
          <Col md={5} className="d-flex justify-content-start">
            <div style={{ marginRight: '40px', width: '100%' }}>
              <h2 className="text-center mb-4">What are you looking for?</h2>
              <Row className="g-3">
                {imageData.map((service, index) => (
                  <Col key={index} xs={6} sm={6} md={4} className="text-center">
                    <div className="service-box">
                      <Link to={service.path}>
                      <img
                        src={service.img}
                        alt={service.name}
                        className="img-fluid mb-2"
                        style={{
                          width: '150px',
                          height: '120px',
                          borderRadius: '10px',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                      </Link>
                      
                      
                      <p>{service.name}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Second container with responsive grid for images */}
          <Col md={7} className="d-flex justify-content-end">
            <div style={containerStyle}>
              <Row className="g-5">
                <Col md={12}>
                  {/* First Row */}
                  <Row style={{ marginBottom: '15px' }}>
                    <Col xs={6} sm={4} md={3}>
                      <img
                        style={serviceImageStyle}
                        src={cleaner}
                        alt="Image 1"
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                    </Col>
                    <Col xs={6} sm={8} md={9}>
                      <img
                        style={serviceImageStyle}
                        src={ac_cleaner}
                        alt="Image 2"
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                    </Col>
                  </Row>
                  {/* Second and Third Row */}
                  <Row>
                    <Col xs={6} sm={4} md={3} style={rowSpanStyle}>
                      <img
                        style={{ ...serviceImageStyle, height: '100%' }}
                        src={commode}
                        alt="Image 3"
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                    </Col>
                    <Col xs={6} sm={4} md={6}>
                      <img
                        style={serviceImageStyle}
                        src={washingmachine}
                        alt="Image 4"
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                      <img
                        style={serviceImageStyle}
                        src={fan}
                        alt="Image 5"
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ display: 'flex', gap: '25px' }}>
        <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
          <CiStar style={{ height: '60px', width: '60px' }} />
          <div>
            <h3>4.8</h3>
            <h6>Service rating</h6>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '25px', marginLeft: '20px' }}>
          <GoPeople style={{ height: '50px', width: '50px' }} />
          <div>
            <h4>12M+</h4>
            <h6>Customers Globally</h6>
          </div>
        </div>
      </div>

      {/* carousel */}
      <StyledHeading text={'Most booked services'} />
      <HorizontalCarousel />
    </>
  );
};

export default Home;
