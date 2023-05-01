/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import React from 'react';

function OurStory() {
    return (
        <div>
            <div className="mx-auto max-w-7xl py-6">
                <div className="py-20">
                    <h1 className="text-4xl font-bold text-center">Our Story</h1>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <img src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600" alt="our story" className="rounded-md" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h2 className="text-2xl font-bold mb-4">From humble beginnings...</h2>
                        <p className="mb-4">
                            At Foodie Adventure, we take pride in our humble beginnings. What started as a small family-owned restaurant has now grown into a popular destination for food enthusiasts
                            around the world. Our journey has been one of hard work, determination, and a passion for creating delicious and memorable dining experiences. From our carefully crafted
                            menus to our warm and welcoming atmosphere, we strive to provide our customers with the best possible dining experience. We are committed to using only the freshest and
                            highest quality ingredients in our dishes, and we are constantly evolving and adapting to meet the ever-changing tastes and preferences of our customers. Our story is one
                            of growth, innovation, and a commitment to excellence, and we are excited to share it with you.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-12">
                    <div className="col-span-12 md:col-span-6 order-1 md:order-1">
                        <h2 className="text-2xl font-bold mb-4">Our Passion for Food</h2>
                        <p className="mb-4">
                            At Foodie Adventure, our passion for food is at the heart of everything we do. We believe that food is not just fuel, but an experience to be savored and enjoyed. Our chefs
                            are passionate about using fresh, locally-sourced ingredients to create dishes that are not only delicious, but also healthy and nourishing. Whether you're a meat lover or
                            a vegetarian, we have something on our menu that will tantalize your taste buds. We are committed to providing our customers with a dining experience that is both memorable
                            and satisfying, and we believe that our passion for food shines through in every dish we serve.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 order-2 md:order-2">
                        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="passion food" className="rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
