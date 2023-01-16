import React from 'react';
import { Container, Image, Row, Col } from "react-bootstrap";
import Review1 from '../assets/images/review1.png';
import Review2 from '../assets/images/review2.png';

function CustomerReviews() {
    return (
        <section id='customer-reviews'>
            <Container fluid className="custom-container">
                <h1>Customers Reviews</h1>
                <Row>
                    <Col md={6}>
                        <div className='customer-review-wrapper'>
                            <div className='customer-review-details'>
                                <h6>I usually avoid online purchases because I couldn’t get any idea about the product quality. But, ordering a gold-plated pendant from baby Paradise was a great experience. Simply loving it..</h6>
                                <div className='customer-details d-flex'>
                                    <div className='customer-img'>
                                        <Image src={Review1} alt='' fluid />
                                    </div>
                                    <div className='name-and-date'>
                                        <h6>Anam Tariq</h6>
                                        <p>Oct 17, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='customer-review-wrapper'>
                            <div className='customer-review-details'>
                                <h6>With the stunning range of trending clothes and fashion accessories, baby paradise never disappoints me. From quality and style to affordability, I always get utmost satisfaction..</h6>
                                <div className='customer-details d-flex'>
                                    <div className='customer-img'>
                                        <Image src={Review2} alt='' fluid />
                                    </div>
                                    <div className='name-and-date'>
                                        <h6>Mehvish Rao</h6>
                                        <p>Sept 14, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CustomerReviews
