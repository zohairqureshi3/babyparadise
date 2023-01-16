import React from 'react';
import {Container, Image, Button, Row, Col} from 'react-bootstrap';
import Girl from '../assets/images/Girl.png';

function FeatureProducts() {
    return (
        <section id='feature-product'>
            <div className='feature-product-bg-img'>
            <Container fluid className='custom-container'>
                <Row>
                    <Col md={6}>
                        <div className='feature-product-wrapper'>
                            <div className='feature-product-img'>
                                <Image src={Girl} alt="" fluid />
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='feature-product-wrapper'>
                            <div className='body-content'>
                            <h1>Featured Product</h1>
                            <h6>Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim.</h6>
                            <Button className='shop-now' variant="success">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default FeatureProducts
