/* eslint-disable react/jsx-indent */
import React from 'react';
import Chefs from './HomePageContent/Chefs';
import Header from './HomePageContent/Header';
import OurStory from './HomePageContent/OurStory';

function Home() {
    return (
        <div className="">
            <Header />
            <Chefs />
            <OurStory />
        </div>
    );
}

export default Home;
