import React from 'react';
import Navigation from '../Navigation/Navigation'
import Banner from '../Banner/Banner'
import About from '../About/About';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;