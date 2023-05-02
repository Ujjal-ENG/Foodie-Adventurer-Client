/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutPage from '../components/pages/AboutPage';
import Blogs from '../components/pages/Blogs/Blogs';
import ChefRecipes from '../components/pages/ChefRecipes/ChefRecipes';
import ErrorPage from '../components/pages/ErrorPage';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/chef-recipes/:id',
                element: (
                    <PrivateRoute>
                        <ChefRecipes />,
                    </PrivateRoute>
                ),
                loader: async ({ params }) => fetch(`http://localhost:8080/recipe-data/${params.id}`)
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: async () => fetch('http://localhost:8080/blogs-data')
            }
        ]
    }
]);
