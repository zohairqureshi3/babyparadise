import React from 'react';
import { Image } from "react-bootstrap";
import AdvatisementImg from '../assets/images/Advatisement.png';

function AdvatisementTime() {
    return (
        <section id="advatisement">
            <div className='advatisement-body'>
                <div className='advatisement-img'>
                    <Image src={AdvatisementImg} fluid alt="" />
                </div>
                <div className='text-heading'>
                    <h1>Join our live Session on Facebook Every Saturday 7:30pm</h1>
                </div>
            </div>
        </section>
    )
}

export default AdvatisementTime
