import React from 'react';
import {Container, Image, Button, Row, Col} from 'react-bootstrap';
import Boy from '../assets/images/Boy.png';

function NewArivals() {
    return (
        <section id='new-arrivals'>
            <div className='new-arrivals-bg-img'>
            <Container fluid className='custom-container'>
                <Row>
                    <Col md={6}>
                        <div className='new-arrivals-wrapper'>
                            <div className='body-content'>
                            <h1>New Arrivals</h1>
                            <h6>Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim.</h6>
                            <Button className='shop-now' variant="success">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='new-arrivals-wrapper'>
                            <div className='new-arrivals-img'>
                                <Image src={Boy} alt="" fluid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}

export default NewArivals
