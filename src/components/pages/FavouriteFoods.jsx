/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';

function FavouriteFoods() {
    const [getLocalStorageFood, setLocalStorageFood] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let count = 1;
    const getItemFromLocalStorage = () => {
        setIsLoading(true);
        const getItem = localStorage.getItem('favoriteFoods');
        if (getItem) {
            setLocalStorageFood(JSON.parse(getItem));
            setIsLoading(false);
        } else {
            setIsLoading(false);
            toast.error('You do not have and Favorite Food!!!');
        }
    };
    useEffect(() => {
        getItemFromLocalStorage();
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    const handleDeleteFood = (id, name) => {
        // eslint-disable-next-line no-unused-vars
        const deleteFood = getLocalStorageFood.filter((el) => el.id !== id || el.recipeName !== name);
        localStorage.setItem('favoriteFoods', JSON.stringify(deleteFood));
        getItemFromLocalStorage();
    };

    return (
        <div>
            {getLocalStorageFood.length === 0 ? (
                <h1 className="my-container text-3xl md:text-7xl font-bold title-text text-center"> Yor Do not Added and Favorite Food from the Recipe Section!!!</h1>
            ) : (
                <div className="overflow-x-auto max-w-7xl mx-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th />
                                <th>Food Name</th>
                                <th>Food Photo</th>
                                <th>Food Chef Name</th>
                                <th>Food Chef Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {getLocalStorageFood &&
                                getLocalStorageFood.map((food) => (
                                    <tr key={count}>
                                        <th>{count++}</th>
                                        <td>
                                            <img className="mask mask-square md:w-48 w-20" src={food.img} alt={food.recipeName} />
                                            {/* <img src={food.img} alt={food.recipeName} /> */}
                                        </td>
                                        <td className="text-xl md:text-2xl font-bold">{food.recipeName}</td>
                                        <td className="text-xl md:text-2xl font-bold"> {food.chefName}</td>
                                        <td>
                                            {/* <img src={food.chefPicture} alt={food.chefName} /> */}
                                            <img className="mask mask-circle md:w-48 w-20 " src={food.chefPicture} alt={food.chefName} />
                                        </td>
                                        <td>
                                            <AiFillDelete className="text-5xl text-red-500 cursor-pointer" onClick={() => handleDeleteFood(food.id, food.recipeName)} />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default FavouriteFoods;
