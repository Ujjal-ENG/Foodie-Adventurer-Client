/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 88 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <nav className={` relative flex justify-between items-center duration-200 transition-all ${isScrolled ? 'sticky top-0 bg-white shadow-md px-6 py-2 ease-in' : 'my-container ease-out'}`}>
            <h1 className="text-3xl font-bold">Foodie Adventure</h1>
            <div className="flex justify-around items-center gap-12 text-3xl">
                <NavLink className={({ isAcitve }) => (isAcitve ? 'active' : 'default')}>Home</NavLink>
                <NavLink className={({ isAcitve }) => (isAcitve ? 'active' : 'default')}>Blog</NavLink>
                <NavLink className={({ isAcitve }) => (isAcitve ? 'active' : 'default')}>Login/Register</NavLink>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="avatar" className="rounded-full" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
