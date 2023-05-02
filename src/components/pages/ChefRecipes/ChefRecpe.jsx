/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function ChefRecpe({ data }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prev) => !prev);
        toast.success('Your Favorite Food is Added in your Favorite List!!');
    };
    return (
        <div>
            <div className="shadow-xl px-5 my-4 duration-200 transition-all ease-in-out hover:shadow-2xl">
                <div className="flex justify-between rounded-md overflow-hidden  px-3">
                    <img className="w-full max-w-xs rounded-xl h-64 object-cover my-auto" src={data.img} alt={data.recipeName} />
                    <div className="px-4 py-4">
                        <div>
                            <h2 className="font-bold mb-2 text-center text-2xl">{data.recipeName}</h2>
                            <p className="text-gray-700 text-base mb-2 text-center">{data.cookingMethod}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="flex justify-start items-end">
                                <h3 className="text-lg font-bold mb-2">Activities</h3>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                                <ul className="list-disc pl-5 mb-2">
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
                                    onClick={toggleFavorite}
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
                                    <span>{isFavorite ? 'Favorite Fodd is Added!!' : 'Add to Favorites'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefRecpe;
