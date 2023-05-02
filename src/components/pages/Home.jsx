/* eslint-disable react/jsx-indent */
import React from 'react';
import Chefs from './HomePageContent/Chefs';
import OurStory from './HomePageContent/OurStory';
import StunningThings from './HomePageContent/StunningThings';

function Home() {
    return (
        <div className="">
            {/* <Header /> */}
            <Chefs />
            <StunningThings />
            <OurStory />
        </div>
    );
}

export default Home;
