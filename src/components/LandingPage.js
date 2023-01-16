import React from 'react';
import Header from './Header';
import Bannerr from './Bannerr';
import Category from './Category';
import FeatureProducts from './FeatureProducts';
import SalesItems from './SalesItems';
import NewArivals from './NewArivals';
import LoadMoreProducts from './LoadMoreProducts';
import AdvatisementTime from './AdvatisementTime';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';


function LandingPage() {
    return (
        <div className='wrapper'>
            <Header />
            <main id='main'>
                <Bannerr />
                <Category />
                <FeatureProducts />
                <SalesItems />
                <NewArivals />
                <LoadMoreProducts />
                <AdvatisementTime />
                <CustomerReviews />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage
