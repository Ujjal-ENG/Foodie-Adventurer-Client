/* eslint-disable react/jsx-indent */
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <FaExclamationTriangle className="text-4xl text-red-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2">Oops, something went wrong!</h1>
                <p className="text-lg text-center mb-4">We apologize for the inconvenience. Please try again later.</p>
                <img src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Error" className="w-80" />
            </div>
        </div>
    );
}

export default ErrorPage;
