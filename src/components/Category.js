import React from 'react';
import {Container, Image, Button, Row, Col} from 'react-bootstrap';
import Category01 from '../assets/images/Category-01.png';
import Category02 from '../assets/images/Category-02.png';
import Category03 from '../assets/images/Category-03.png';
import Category04 from '../assets/images/Category-04.png';

function Category() {
    return (
        <section id='sample-category'>
            <Container fluid className='custom-container'>
                <Row>
                    <Col sm={6} md={3}>
                        <div className='category-wrapper'>
                            <div className='category-img'>
                                <Image src={Category01} fluid alt='' />
                            </div>
                            <div className='category-btn'>
                                <Button variant="primary">Newborn Clothes</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='category-wrapper'>
                            <div className='category-img'>
                                <Image src={Category02} fluid alt='' />
                            </div>
                            <div className='category-btn'>
                                <Button variant="primary">3 to 12 Months Clothes</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='category-wrapper'>
                            <div className='category-img'>
                                <Image src={Category03} fluid alt='' />
                            </div>
                            <div className='category-btn'>
                                <Button variant="primary">1 to 5 Years Clothes</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='category-wrapper'>
                            <div className='category-img'>
                                <Image src={Category04} fluid alt='' />
                            </div>
                            <div className='category-btn'>
                                <Button variant="primary">Accessories</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Category
