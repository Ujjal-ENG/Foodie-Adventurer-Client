/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ChefRecipes from '../components/pages/ChefRecipes/ChefRecipes';
import ErrorPage from '../components/pages/ErrorPage';
import Home from '../components/pages/Home';

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
                element: <ChefRecipes />,
                loader: async ({ params }) => fetch(`http://localhost:8080/recipe-data/${params.id}`)
            }
        ]
    }
]);
