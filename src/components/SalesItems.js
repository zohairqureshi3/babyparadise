import React from 'react';
import {Container, Image, Button, Row, Col} from 'react-bootstrap';
import Product1 from '../assets/images/Product-01.png';
import Product2 from '../assets/images/Product-02.png';
import Product3 from '../assets/images/Product-03.png';


function SalesItems() {
    return (
        <section id='sales-items'>
            <div className='sales-items-container'>
            <Container fluid className='custom-container'>
                <Row>
                    <Col md={4}>
                        <div className='sales-items-wrapper'>
                            <div className='body-content'>
                            <h2>On Sale Items</h2>
                            <h6>Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim.</h6>
                            <Button className='shop-now' variant="success">View All</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                    <div className='sales-items-wrapper'>
                        <Row>
                            <Col lg={4} sm={6}>
                                <div className='sales-items'>
                                    <div className='img-price-wrapper'>
                                    <div className='sales-items-img'>
                                        <Image src={Product1} alt='' fluid />
                                    </div>
                                    <div className='sales-items-price'>
                                        <span className='original-price'>Rs.5300<span className='corssout-price'>Rs.6500</span></span>
                                    </div>
                                    </div>
                                    <p>Toddler Baby Hooded</p>
                                    <Button className='shop-now' variant="success">SHOP NOW</Button>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className='sales-items'>
                                    <div className='img-price-wrapper'>
                                    <div className='sales-items-img'>
                                        <Image src={Product2} alt='' fluid />
                                    </div>
                                    <div className='sales-items-price'>
                                        <span className='original-price'>Rs.5300<span className='corssout-price'>Rs.6500</span></span>
                                    </div>
                                    </div>
                                    <p>Newborn Baby Clothe Set</p>
                                    <Button className='shop-now' variant="success">SHOP NOW</Button>
                                </div>
                            </Col>
                            <Col lg={4} sm={6}>
                                <div className='sales-items'>
                                    <div className='img-price-wrapper'>
                                    <div className='sales-items-img'>
                                        <Image src={Product3} alt='' fluid />
                                    </div>
                                    <div className='sales-items-price'>
                                        <span className='original-price'>Rs.5300<span className='corssout-price'>Rs.6500</span></span>
                                    </div>
                                    </div>
                                    <p>Baby Frock</p>
                                    <Button className='shop-now' variant="success">SHOP NOW</Button>
                                </div>
                            </Col>

                        </Row>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default SalesItems
