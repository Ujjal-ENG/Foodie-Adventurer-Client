/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

function CardSlider({ data }) {
    return (
        <Swiper className="max-w-7xl mx-auto swiper-container" slidesPerView={3} spaceBetween={30} loop>
            {data.map((item) => (
                <SwiperSlide key={item.id} className="max-w-6xl">
                    <div className="w-full p-4">
                        <div className="border rounded-lg overflow-hidden shadow-md">
                            <img src={item.chefPicture} alt={item.chefName} className="w-full h-56 object-cover duration-200 transition-all ease-linear hover:-scale-x-110" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{item.chefName}</h2>
                                <p className="text-gray-600 mb-2">Years of experience: {item.yearsOfExperience}</p>
                                <p className="text-gray-600 mb-2">Number of recipes: {item.numberOfRecipes}</p>
                                <p className="text-gray-600">Likes: {item.likes}</p>
                            </div>
                            <Link to="#" className="btn btn-primary w-full mt-auto">
                                View Recipe
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CardSlider;
