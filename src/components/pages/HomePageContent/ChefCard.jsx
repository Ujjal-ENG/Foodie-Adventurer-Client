/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */

import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

function CardSlider({ data }) {
    return (
        <div className="mx-auto">
            <div className="hidden md:block">
                <Swiper
                    className="max-w-7xl mx-auto"
                    centeredSlides
                    slidesPerView={3}
                    spaceBetween={30}
                    loop
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay, Pagination]}>
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className="mb-10">
                            <div className="w-1/2 md:w-full  md:block p-4 duration-200 transition-all ease-in-out hover:-translate-y-4">
                                <div className="border rounded-lg overflow-hidden shadow-md">
                                    <LazyLoad once>
                                        <img src={item.chefPicture} alt={item.chefName} className="w-full h-56 object-cover" />
                                    </LazyLoad>
                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold mb-2">{item.chefName}</h2>
                                        <p className="text-gray-600 mb-2 font-bold">Years of experience: {item.yearsOfExperience}</p>
                                        <p className="text-gray-600 mb-2 font-bold">Number of recipes: {item.numberOfRecipes}</p>
                                        <p className="text-gray-600 font-bold">Likes: {item.likes}</p>
                                    </div>
                                    <Link to={`chef-recipes/${item.id}`} className="btn btn-primary w-full mt-auto">
                                        View Recipes
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:hidden w-[300px] flex justify-center items-center flex-col space-y-4">
                {data.map((item) => (
                    <div key={item.id} className="w-full duration-200 transition-all ease-in-out hover:-translate-y-4">
                        <div className="border rounded-lg  shadow-md">
                            <LazyLoad once>
                                <img src={item.chefPicture} alt={item.chefName} className="w-full h-56 object-cover" />
                            </LazyLoad>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{item.chefName}</h2>
                                <p className="text-gray-600 mb-2">Years of experience: {item.yearsOfExperience}</p>
                                <p className="text-gray-600 mb-2">Number of recipes: {item.numberOfRecipes}</p>
                                <p className="text-gray-600">Likes: {item.likes}</p>
                            </div>
                            <Link to={`chef-recipes/${item.id}`} className="btn btn-primary w-full mt-auto">
                                View Recipes
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardSlider;
