/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import bannerImg from '../../../assets/banner.jpg';
import Left from './Left';
import Right from './Right';

function Header() {
    const [sliderData, setSliderData] = useState([]);

    // get data
    const getSliderData = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/slider-data');
            if (data.success) {
                setSliderData(data.headerData.data);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error Occured while fetching the Slider Data from Server!!');
        }
    };

    useEffect(() => {
        getSliderData();
    }, []);

    console.log(sliderData);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-30" />
            <div className="relative z-10">
                <div className="grid grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                    <div className="col-span-4">
                        <Left />
                    </div>
                    <div className="col-span-8 ml-24">
                        <Right data={sliderData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
