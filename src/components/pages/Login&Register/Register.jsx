/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle registration form submission
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center font-bold text-gray-700 text-3xl mb-6">Sign up</div>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaEnvelope className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaLock className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                            Photo URL
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className="h-6 w-6 text-gray-400" />
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photoUrl"
                                type="text"
                                placeholder="Link to your photo"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="text-gray-500 text-center text-sm font-bold text-xl">
                    Already have an account?
                    <Link to="/login" className="text-blue-500 hover:text-blue-700">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
