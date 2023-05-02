/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { BiBowlHot } from 'react-icons/bi';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import { GiBombingRun, GiChickenOven } from 'react-icons/gi';
import { GrDeliver } from 'react-icons/gr';
import { SiCodechef } from 'react-icons/si';

function StunningThings() {
    return (
        <div className="my-container">
            <div className="py-10">
                <h3 data-aos="fade-up" className="text-center text-2xl font-bold pt-2" data-aos-duration="1000">
                    For Your Comfort
                </h3>
                <h3 data-aos="fade-up" className="text-center text-4xl font-bold pt-2" data-aos-duration="1000">
                    Stunning Things
                </h3>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-10">
                {/* first div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <BiBowlHot className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">High Quality Foods</h2>
                        <p className="text-center">
                            High Quality Foods refers to food products that are made from high-quality ingredients, using ethical and sustainable practices, and are free from harmful additives or
                            chemicals.
                        </p>
                    </div>
                </div>
                {/* second div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <FaGlassMartiniAlt className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">Inspiring Recipes</h2>
                        <p className="text-center">
                            Inspiring Recipes - a collection of recipes that are creative, innovative and thought-provoking, designed to inspire home cooks and food enthusiasts to explore new culinary
                            techniques and flavor combinations.
                        </p>
                    </div>
                </div>
                {/* third div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <GiChickenOven className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">Salutary Meals </h2>
                        <p className="text-center">
                            Salutary Meals are the perfect choice for those seeking a healthy and balanced diet. Our meals are carefully crafted using only the finest ingredients, ensuring that you
                            get the nutrients you need without sacrificing taste or quality.
                        </p>
                    </div>
                </div>
                {/* fourth div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <SiCodechef className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">Veteran Staff </h2>
                        <p className="text-center">
                            Our restaurant prides itself on having a team of veteran staff members who are passionate about creating exceptional dining experiences for our guests. With years of
                            experience in the culinary industry, our chefs and servers are dedicated to providing top-notch service and delicious meals that are sure to leave a lasting impression.
                        </p>
                    </div>
                </div>
                {/* fifth div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <GiBombingRun className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">Pristine Ingredients</h2>
                        <p className="text-center">
                            Pristine Ingredients - The foundation of every great dish. Our commitment to using only the freshest and highest quality ingredients ensures that every meal is a feast for
                            the senses. From farm-fresh produce to premium cuts of meat and fish, we believe that the quality of the ingredients is what sets us apart.
                        </p>
                    </div>
                </div>
                {/* sixth div */}
                <div className="card md:w-96 w-full bg-base-300 shadow-xl duration-200 md:hover:translate-x-4 transition-all ease-linear">
                    <div className="progress-bar" />
                    <GrDeliver className="text-5xl mx-auto mt-2 textred" />
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title tracking-wider">Express Delivery</h2>
                        <p className="text-center">
                            Get your meals delivered right to your doorstep with our express delivery service. No more waiting around for your food - enjoy the convenience of timely and efficient
                            delivery. With our commitment to quality and speed, you can expect nothing but the best with our express delivery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StunningThings;
