import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ChefRecipes() {
    const loader = useLoaderData();
    console.log(loader);
    return <div>ChefRecipes</div>;
}

export default ChefRecipes;
