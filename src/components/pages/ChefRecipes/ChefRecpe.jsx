/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';

function ChefRecpe({ data, chefName, chefPicture, id }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = (foodData, chefName, chefPicture, id) => {
        setIsFavorite((prev) => !prev);
        toast.success('Your Favorite Food is Added in your Favorite List!!');

        // Retrieve the list of favorite foods from localStorage
        const storedFavorites = localStorage.getItem('favoriteFoods');

        if (storedFavorites) {
            // If there are already favorite foods in localStorage, parse the JSON
            // and add the new food to the existing list
            const existingFavorites = JSON.parse(storedFavorites);
            localStorage.setItem(
                'favoriteFoods',
                JSON.stringify([
                    ...existingFavorites,
                    {
                        ...foodData,
                        id,
                        chefName,
                        chefPicture
                    }
                ])
            );
        } else {
            // If there are no favorite foods in localStorage, create a new list
            // containing the selected food and save it to localStorage
            localStorage.setItem(
                'favoriteFoods',
                JSON.stringify([
                    {
                        ...foodData,
                        id,
                        chefName,
                        chefPicture
                    }
                ])
            );
        }
    };

    return (
        <motion.div className="flex flex-col  items-center lg:items-start mb-10 lg:mb-0" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="shadow-xl px-5 my-4 duration-200 transition-all ease-in-out hover:shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between rounded-md overflow-hidden  px-3">
                    <img className="w-full max-w-xs rounded-xl h-80 object-cover my-auto" src={data.img} alt={data.recipeName} />
                    <div className="px-4 py-4">
                        <div>
                            <h2 className="font-bold mb-2 text-center text-2xl">{data.recipeName}</h2>
                            <p className="text-gray-700 text-base mb-2 text-center">{data.cookingMethod}</p>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-3 gap-5">
                            <div className="flex justify-start items-end gap-2">
                                <h3 className="text-lg font-bold mb-2">Rating:</h3>
                                <ReactStars value={data.rating} size={30} edit={false} isHalf emptyIcon={<BsStar />} halfIcon={<BsStarHalf />} fullIcon={<BsStarFill />} activeColor="#ffd700" />,
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                                <ul className="list-disc  pl-5 mb-2">
                                    {data.ingredients.map((el, idx) => (
                                        <li key={idx}>{el}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-end items-end">
                                <button
                                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white ${
                                        isFavorite ? 'bg-red-500' : 'bg-gray-500'
                                    } hover:bg-red-600 transition-colors`}
                                    onClick={() => handleAddToFavorites(data, chefName, chefPicture, id)}
                                    disabled={isFavorite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d={
                                                isFavorite
                                                    ? 'M9.543 15.472a.75.75 0 01-1.086 0l-3.6-3.857a3.822 3.822 0 015.533-5.217 3.822 3.822 0 015.533 5.217l-3.6 3.857a.75.75 0 01-1.086 0L10 13.165l-.457.307z'
                                                    : 'M16.22 7.148a4.158 4.158 0 00-6.166 0l-.407.437-.407-.437a4.158 4.158 0 00-6.166 0 4.645 4.645 0 000 6.2l6.573 7.028a.75.75 0 001.086 0l6.573-7.028a4.645 4.645 0 000-6.2z'
                                            }
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{isFavorite ? 'Favorite Food is Added!!' : 'Add to Favorites'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ChefRecpe;
