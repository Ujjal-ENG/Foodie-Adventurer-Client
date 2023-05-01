/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

function ChefCard() {
    return (
        <div className="w-full p-4">
            <div className="border rounded-lg overflow-hidden shadow-md">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/20161219132635-sanjeev-kapoor-editedvvv.jpeg" alt="sanjeeb" className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Sanjeeb</h2>
                    <p className="text-gray-600 mb-2">Years of experience: 30</p>
                    <p className="text-gray-600 mb-2">Number of recipes: 100</p>
                    <p className="text-gray-600">Likes: 10000</p>
                </div>
                <Link to="#" className="btn btn-primary w-full mt-auto">
                    View Recipe
                </Link>
            </div>
        </div>
    );
}

export default ChefCard;
