import React from 'react';
import Banner from '../Banner/Banner'
import About from '../About/About';
import Service from '../Service/Service';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog'

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Projects></Projects>
           <Contact></Contact>
           <Blog></Blog>
        </div>
    );
};

export default Home;