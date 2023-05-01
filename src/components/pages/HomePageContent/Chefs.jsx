/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import AOS from 'aos';
import React, { useEffect } from 'react';
import ChefCard from './ChefCard';

function Chefs() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in milliseconds
            easing: 'ease-in-out', // animation easing
            once: true // animation only happens once
        });
    }, []);
    return (
        <div>
            <div className="py-20">
                <h3 data-aos="fade-up" className="text-center text-4xl font-bold pt-2" data-aos-duration="1000">
                    Our Valuable Chefs
                </h3>
            </div>
            <ChefCard />
        </div>
    );
}

export default Chefs;
