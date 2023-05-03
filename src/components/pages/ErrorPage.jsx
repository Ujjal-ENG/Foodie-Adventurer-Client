/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/notfoun.png';

function ErrorPage() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="flex flex-col items-center justify-center  text-white">
                        <div className="max-w-7xl mb-10 flex flex-col items-center justify-center">
                            <iframe src="https://embed.lottiefiles.com/animation/98642" className="max-w-lg w-full md:w-auto h-96"></iframe>
                        </div>

                        <h1 className="text-4xl font-bold  mb-4 text-center">Oops! Page not found.</h1>
                        <p className="text-lg mb-8 text-center">We're sorry, the page you're looking for does not exist.</p>
                        <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                            Go back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
