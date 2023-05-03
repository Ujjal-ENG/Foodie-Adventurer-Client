/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import AOS from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ChefCard from './ChefCard';

function Chefs() {
    const [chefData, setChefData] = useState([]);
    // get Chefs Data
    const getChefData = async () => {
        try {
            const { data } = await axios.get('https://foodie-adventurer-server.vercel.app/chefs-data');
            if (data.success) {
                setChefData(data.chefsData.chefs);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error Occures while fetching Chefs Card Data!!');
        }
    };
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in milliseconds
            easing: 'ease-in-out', // animation easing
            once: true // animation only happens once
        });
        getChefData();
    }, []);

    return (
        <div>
            <div className="py-10">
                <h3 data-aos="fade-up" className="text-center text-4xl font-bold pt-2" data-aos-duration="1000">
                    Meet The Chefs
                </h3>
            </div>
            <div className="my-container grid grid-cols-3 gap-6">{chefData && <ChefCard data={chefData} />}</div>
        </div>
    );
}

export default Chefs;
