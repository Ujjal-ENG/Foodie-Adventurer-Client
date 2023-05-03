/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

function Login() {
    const { signInUser, singInGoogle, signInGitHub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password);
        navigate(from);
    };

    const handleGoogleSignIn = () => {
        singInGoogle();
        navigate(from);
    };
    const handleGitHubSignIn = () => {
        signInGitHub();
        navigate(from);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-container ">
            <div className=" shadow-2xl rounded-md flex flex-col justify-center py-12 sm:px-6 lg:px-8 order-2 md:order-1">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full ">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="block w-full pl-10  sm:text-sm border-gray-300 rounded-md input input-bordered input-primary  "
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            autoComplete="current-password"
                                            required
                                            className="input input-bordered input-primary   block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-medium text-yellow-600 hover:text-yellow-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-sm pt-3">
                            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-400">
                                Are you New? Register Please..
                            </Link>
                        </div>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                        <span className="sr-only">Sign in with Google</span>
                                        <AiFillGoogleCircle className="h-5 w-5 text-red-500 group-hover:text-red-600" aria-hidden="true" />
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={handleGitHubSignIn}
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                        <span className="sr-only">Sign in with GitHub</span>
                                        <AiFillGithub className="h-5 w-5 text-gray-500 group-hover:text-gray-600" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <iframe src="https://embed.lottiefiles.com/animation/67378" className="w-full h-[200px] md:min-h-screen" />
            </motion.div>
        </div>
    );
}
export default Login;
