/* eslint-disable react/jsx-indent */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="my-container flex justify-between items-center ">
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
