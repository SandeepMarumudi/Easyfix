import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mcb from '../pictures/elctrician/mcb.jpg';
import wires from '../pictures/elctrician/wires.jpg';
import socket from '../pictures/elctrician/switch.jpg';
import bulb from '../pictures/elctrician/bulb1.jpg';
import inverter from '../pictures/elctrician/inverter.jpg';
import fan from '../pictures/elctrician/fan.jpg';
import expert from '../pictures/elctrician/expert.jpg';
import HorizontalCard from '../components/card';
import { fetchPromisedata } from '../redux/getdetails/getslice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart/cartslice';
import axios from 'axios';

const Elecrician = () => {
    const dispatch = useDispatch();

    // Fetching the user and cart data from Redux state
    const { data, loading, error } = useSelector(state => state.getdata);
    const { cart } = useSelector(state => state.cartData);

    const images = [
        { img: mcb, title: 'Mcb', price: 200 },
        { img: fan, title: 'Fan', price: 300 },
        { img: bulb, title: 'Lights', price: 400 },
        { img: socket, title: 'Switch & Socket', price: 500 },
        { img: inverter, title: 'Inverter', price: 600 },
        { img: wires, title: 'Wiring', price: 200 },
        { img: socket, title: 'Consult Expert', price: 200 },
        { img: mcb, title: 'Mcb', price: 500 },
        { img: expert, title: 'Consult Expert', price: 500 },
    ];

    // Handling adding cards to the cart and checking for duplicates
    const cardhandle = (img, title, price, id) => {
        if (!cart.some((c) => c.title === title)) {
            const newcard = { id: Date.now(), img, title, price };
            dispatch(addToCart(newcard));
        }
    };

    // Fetch user data on component mount
    useEffect(() => {
        const userEmail = localStorage.getItem('useremail');
        if (userEmail) {
            dispatch(fetchPromisedata(userEmail));
        }
    }, [dispatch]);

    // Posting the cart on the server
    const postCartOnServer = async (newcart) => {
        const userEmail = localStorage.getItem('useremail');
        if (userEmail) {
            try {
                // Fetch user details from the server
                const response = await axios.get(`http://localhost:3000/users?email=${userEmail}`);
                const user = response.data[0];

                if (user) {
                  const userCart = user.cart || [];
                  const updatedCart = [...userCart, newcart];
                   
                    await axios.patch(`http://localhost:3000/users/${user.id}`, { cart: updatedCart });
                    console.log('Cart updated successfully on the server!');
                }
            } catch (error) {
                console.error('Error updating cart on the server:', error);
            }
        }
    };

    // Handling adding items to the cart and syncing with the server
    const addToCartHandle = (obj) => {
        postCartOnServer(obj); // Post the updated cart to the server
    };

    if (loading) return <p>Please wait...</p>;  // Display loading state
    if (error) return <p>{error}</p>;  // Handle error state

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
                                                onClick={() => cardhandle(image.img, image.title, image.price, index + 1)}
                                            />
                                            <p className="text-center">{image.title}</p> {/* Centering text */}
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column with Cart Data */}
                    <Col xs={12} lg={8} className="order-lg-2 order-2">
                        {cart.length > 0 ? (
                            cart.map((each, index) => (
                                <HorizontalCard
                                    key={index}
                                    title={each.title}
                                    price={each.price}
                                    url={each.img}
                                    button_text2={'Add'}
                                    onpress={() => addToCartHandle({
                                        id: each.id,
                                        title: each.title,
                                        price: each.price,
                                        url: each.img,
                                    })}
                                />
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Elecrician;
