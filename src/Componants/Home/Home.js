import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import ClientArea from './ClientArea/ClientArea';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services />
            <ClientArea></ClientArea>
        </div>
    );
};

export default Home;
