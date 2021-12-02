import React from 'react';
import Navigation from '../Navigation/Navigation'
import Banner from '../Banner/Banner'
import About from '../About/About';
import Service from '../Service/Service';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Projects></Projects>
        </div>
    );
};

export default Home;