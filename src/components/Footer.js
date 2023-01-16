import React from 'react';
import { Container, Image, Row, Col, Form, Button } from "react-bootstrap";
import FooterLogo from '../assets/images/HeaderLogo.svg';
import Facebook from '../assets/images/facebook.png';
import Linkedin from '../assets/images/linkedin.png';
import Twitter from '../assets/images/twitter.png';
import Youtube from '../assets/images/youtube.png';

function Footer() {
    return (
        <section id='footer'>
            <Container fluid className="custom-container">
                <Row>
                    <Col sm={6} md={4}>
                        <div className='footer-wrapper'>
                            <div className='footer-logo'>
                                <Image src={FooterLogo} fluid alt="" />
                            </div>
                            <h6>Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim.</h6>
                            <div className='footer-social-linkss'>
                                <h6>FOLLOW US</h6>
                                <ul className='footer-social-links-ul d-flex'>
                                    <li><a><Image src={Facebook} fluid alt="" /></a></li>
                                    <li><a><Image src={Linkedin} fluid alt="" /></a></li>
                                    <li><a><Image src={Twitter} fluid alt="" /></a></li>
                                    <li><a><Image src={Youtube} fluid alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className='footer-wrapper'>
                            <h3>Useful links</h3>
                            <div className='d-flex justify-content-center'>
                                <ul className='footer-links footer--1'>
                                    <li><a href='#'>Home</a></li>
                                    <li><a href='#'>Shop</a></li>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>Categories</a></li>
                                </ul>
                                <ul className='footer-links footer--2'>
                                    <li><a href='#'>Blog</a></li>
                                    <li><a href='#'>Login</a></li>
                                    <li><a href='#'>Register</a></li>
                                </ul>
                            </div>
                        </div>
                        </Col>
                        <Col sm={6} md={4}>
                        <div className='footer-wrapper'>
                            <h3>Subscribe Our Newsletter</h3>
                            <Form>
                            <Form.Control type="email" placeholder="Enter email" />
                            <div className='subscribe-btn'>
                            <Button variant="primary" type="submit">Subscribe</Button>
                            </div>
                            </Form>
                        </div>
                        </Col>
                </Row>
            </Container>
            <hr className='hr-line' />
            <div className='all-right-services'>
                <p>2021 BabyParadise.All Rights Reserved</p>
            </div>
            
        </section>
    )
}

export default Footer
