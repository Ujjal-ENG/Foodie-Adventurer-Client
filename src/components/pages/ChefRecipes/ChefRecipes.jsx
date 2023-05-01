/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

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

            <div className="my-container">receps</div>
        </div>
    );
}

export default ChefRecipes;
