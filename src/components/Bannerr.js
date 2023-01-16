import React from 'react';
import {Container, Image, Button} from 'react-bootstrap';
import Banner from '../assets/images/Banner.png';

function Bannerr() {
    return (
        <section id='banner'>
            <div className='banner-img'>
                <Image src={Banner} fluid alt="" />
            </div>
            <Container fluid className='custom-container'>
                <div className='banner-body'>
                    <h1>Kids Trending Clothes.</h1>
                    <h5>Duis porta, ligula rhoncus euismod pretium, nisi tellus eleifend odio, luctus viverra sem dolor id sem. Maecenas a venenatis enim.</h5>
                    <Button className='shop-now' variant="success">SHOP NOW</Button>
                </div>
            </Container>
        </section>
    )
}

export default Bannerr
