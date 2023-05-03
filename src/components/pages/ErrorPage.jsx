/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div className="max-w-lg mb-10 flex flex-col items-center justify-center">
                <img src="https://picsum.photos/id/237/400/400" alt="404 Error" className="w-full mb-6 md:max-w-none md:mr-6 md:mb-0" />
                <iframe src="https://embed.lottiefiles.com/animation/98642" className="max-w-lg w-full md:w-auto md:max-w-none"></iframe>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Oops! Page not found.</h1>
            <p className="text-lg text-gray-800 mb-8 text-center">We're sorry, the page you're looking for does not exist.</p>
            <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                Go back to homepage
            </Link>
        </div>
    );
}

export default ErrorPage;
