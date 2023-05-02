/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import React from 'react';
import { FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { RiHotelBedFill } from 'react-icons/ri';

function AboutPage() {
    return (
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to Foodie Adventurer!</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:justify-between  my-container w-full  mx-auto px-6 lg:px-0">
                <motion.div
                    className="flex flex-col  items-center lg:items-start mb-10 lg:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <FaUtensils className="text-6xl text-green-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Our Cuisine</h2>
                    <p className="text-lg text-gray-700 text-center lg:text-left">
                        We specialize in a variety of cuisines from all over the world. Our menu includes dishes from Italy, Thailand, India, and more. We use fresh, locally-sourced ingredients to
                        ensure that our dishes are of the highest quality.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center lg:items-start mb-10 lg:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    <FaMapMarkerAlt className="text-6xl text-red-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                    <p className="text-lg text-gray-700 text-center lg:text-left">
                        You can find us in the heart of downtown, just a few blocks from the waterfront. Our restaurant is located at 123 Main St. and is easily accessible by public transportation or
                        by car. We also offer valet parking for your convenience.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center lg:items-start mb-10 lg:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}>
                    <RiHotelBedFill className="text-6xl text-blue-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Our Accommodations</h2>
                    <p className="text-lg text-gray-700 text-center lg:text-left">
                        If you're visiting from out of town, we've got you covered. Our restaurant is located within walking distance of several hotels and other accommodations. We also offer a
                        discount on your meal if you're staying at one of our partner hotels.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center lg:items-start mb-10 lg:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}>
                    <FiClock className="text-6xl text-yellow-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">Our Hours</h2>
                    <p className="text-lg text-gray-700 text-center lg:text-left">
                        We're open 7 days a week from 11am to 10pm. Whether you're looking for a quick lunch or a leisurely dinner, we've got you covered. We also offer a weekend brunch menu from 9am
                        to 2pm on Saturdays and Sundays.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutPage;
