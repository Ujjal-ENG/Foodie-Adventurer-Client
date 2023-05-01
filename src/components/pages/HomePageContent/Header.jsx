/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import bannerImg from '../../../assets/banner.jpg';
import Left from './Left';
import Right from './Right';

function Header() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-30" />
            <div className="relative z-10">
                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-3">
                        <Left />
                    </div>
                    <div className="col-span-9 ml-24">
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
