/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
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
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    <img src={findData.chefPicture} className="max-w-sm rounded-lg shadow-2xl" alt={findData.chefName} />
                    <div>
                        <h1 className="text-5xl font-bold hover-stroke">{findData.chefName}</h1>
                        <p className="py-6 tracking-wider text-xl font-bold">{findData.description}</p>
                        <div className="flex justify-evenly items-center text-2xl font-bold">
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
                </div>
            </div>

            <div className="my-container">
                <h1 className="bg-gradient-to-r animate-pulse text-center from-purple-400 via-pink-500 to-red-500 text-5xl font-bold bg-clip-text text-transparent animate-gradient-x">
                    Top {findData.recipes.length} recipes of {findData.chefName}
                </h1>
                {findData.recipes.map((el, idx) => (
                    <ChefRecpe key={idx} data={el} />
                ))}
            </div>
        </div>
    );
}

export default ChefRecipes;
