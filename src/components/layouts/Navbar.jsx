/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-indent */
import React, { useContext, useEffect, useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ProfileModal from '../pages/ProfileModal';

function Navbar() {
    const { userInfo, logOutUser } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
        <nav className={`z-50 relative flex justify-between items-center duration-200 transition-all ${isScrolled ? 'sticky top-0 bg-white shadow-md px-6 py-2 ease-in' : 'my-container ease-out'}`}>
            <div className="flex items-center gap-2">
                <iframe src="https://embed.lottiefiles.com/animation/56866" className="h-14 w-14" />
                <h1 className="text-2xl md:text-3xl font-bold text-primary">Foodie Adventurer</h1>
            </div>

            <div className="hidden lg:flex justify-around items-center gap-12 text-2xl">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Home
                </NavLink>
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Blog
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    About Us
                </NavLink>
                {userInfo && (
                    <NavLink to="/favorites-foods" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        My Favorites Foods
                    </NavLink>
                )}
                {!userInfo ? (
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Login
                    </NavLink>
                ) : (
                    <button type="button" onClick={() => logOutUser()} className="btn btn-sm btn-warning">
                        LogOut
                    </button>
                )}
                {userInfo && (
                    <label htmlFor="my-modal-3" className={`avatar ${userInfo && 'tooltip tooltip-primary tooltip-left'} `} data-tip={userInfo.displayName}>
                        <div className="w-12">
                            <img src={userInfo.photoURL} alt="avatar" className="rounded-full cursor-pointer" />
                        </div>
                    </label>
                )}
                {userInfo && <ProfileModal photo={userInfo.photoURL} name={userInfo.displayName} email={userInfo.email} />}
            </div>

            {/* for mobile menu */}
            <div className=" lg:hidden lg:shadow-lg ">
                {isMenuOpen ? <MdOutlineRestaurantMenu className="text-3xl text-red-500" onClick={handleMenuOpen} /> : <ImMenu className="text-3xl text-violet-700" onClick={handleMenuOpen} />}

                <ul className={`menu py-5 absolute left-0 duration-200 ease-in-out transition-all ${isMenuOpen ? 'top-20' : '-top-96'} bg-base-100 w-full text-center space-y-4 rounded-lg lg:hidden`}>
                    {userInfo && (
                        <label htmlFor="my-modal-3" className={`avatar mx-auto py-2 ${userInfo && 'tooltip tooltip-primary tooltip-left'} `} data-tip={userInfo.displayName}>
                            <div className="w-12">
                                <img src={userInfo.photoURL} alt="avatar" className="rounded-full cursor-pointer" />
                            </div>
                        </label>
                    )}
                    {userInfo && <ProfileModal photo={userInfo.photoURL} name={userInfo.displayName} email={userInfo.email} />}
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </NavLink>
                    {userInfo && (
                        <NavLink to="/favorites-foods" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            My Favorites Foods
                        </NavLink>
                    )}
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsMenuOpen(false)}>
                        About Us
                    </NavLink>
                    {!userInfo ? (
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsMenuOpen(false)}>
                            Login
                        </NavLink>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                logOutUser();
                                setIsMenuOpen(false);
                            }}
                            className="btn btn-sm mx-4 btn-warning">
                            LogOut
                        </button>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
