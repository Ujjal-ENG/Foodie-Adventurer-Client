/* eslint-disable react/jsx-no-useless-fragment */
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
    const [backgroudImage, setBackgrondImage] = useState(null);
    const [isImageBg, setIsImgBg] = useState(false);
    const [ids, setId] = useState(0);
    // get data
    const getSliderData = async () => {
        try {
            const { data } = await axios.get('https://foodie-adventurer-server.vercel.app/slider-data');
            if (data.success) {
                setSliderData(data.headerData.data);
            }
        } catch (error) {
            console.log(error);
            toast.error('Error Occured while fetching the Slider Data from Server!!');
        }
    };

    const getData = (id) => {
        const findData = sliderData.find((el) => el.id === id);
        setBackgrondImage(findData);
        setIsImgBg(true);
        setId(id);
    };

    useEffect(() => {
        getSliderData();
    }, []);

    return (
        <>
            {isImageBg && ids !== 0 ? (
                <div className="hero min-h-screen duration-200 transition-all ease-in-out" style={{ backgroundImage: `url(${backgroudImage.img})` }}>
                    <div className="hero-overlay bg-opacity-30" />
                    <div className="relative z-10">
                        <div className="grid grid-cols-12  justify-items-center px-12 items-center h-full mt-12">
                            {/* On small devices display the components in a column */}

                            <div className="col-span-4">
                                <Left data={backgroudImage} id={ids} />
                            </div>
                            <div className="col-span-8">
                                <Right data={sliderData} getData={getData} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                    <div className="hero-overlay bg-opacity-30" />
                    <div className="relative z-10">
                        <div className="grid grid-flow-row grid-cols-1 md:grid-flow-row md:grid-cols-12 justify-items-center px-12 items-center h-full mt-12">
                            <div className="md:col-span-4">
                                <Left data={backgroudImage} id={ids} />
                            </div>
                            <div className="col-span-8 ml-24 duration-200 transition-all ">
                                <Right data={sliderData} getData={getData} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
