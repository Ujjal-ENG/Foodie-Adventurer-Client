/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecpe from './ChefRecpe';

function ChefRecipes() {
    const loader = useLoaderData();
    const { findData } = loader;
    return (
        <div>
            <div className="hero min-h-[calc(70vh)] bg-cover" style={{ backgroundImage: `url(${findData.chefPicture})` }}>
                <div className="hero-overlay bg-opacity-70" />
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-content flex-col lg:flex-row-reverse text-white">
                    <img src={findData.chefPicture} className="md:max-w-md max-w-xs rounded-lg shadow-2xl" alt={findData.chefName} />
                    <div>
                        <h1 className="md:text-5xl text-3xl text-center md:text-start  font-bold hover-stroke">{findData.chefName}</h1>
                        <p className="py-6 md:tracking-wider tracking-tight md:text-xl font-bold">{findData.description}</p>
                        <div className="flex flex-col md:flex-row justify-evenly items-center text-2xl font-bold">
                            <p className="text-amber-500  mb-2">
                                Years of experience: <span className="text-white">{findData.yearsOfExperience}</span>{' '}
                            </p>
                            <p className="text-amber-500">
                                Number of recipes: <span className="text-white">{findData.numberOfRecipes}</span>{' '}
                            </p>
                            <p className="text-amber-500  ">
                                Likes: <span className="text-white">{findData.likes}</span>{' '}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="my-container">
                <h1 className="title-text text-4xl font-bold text-center">
                    Top {findData.recipes.length} recipes of {findData.chefName}
                </h1>
                {findData.recipes.map((el, idx) => (
                    <ChefRecpe key={idx} data={el} chefName={findData.chefName} chefPicture={findData.chefPicture} id={findData.id} />
                ))}
            </div>
        </div>
    );
}

export default ChefRecipes;
