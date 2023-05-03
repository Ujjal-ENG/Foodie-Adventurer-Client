/* eslint-disable react/jsx-no-bind */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
// import Swiper core and required modules
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Right({ data, getData }) {
    const [indexes, setIndex] = useState(0);

    function handleSlideChange(swiper) {
        setIndex(swiper.realIndex);
        getData(swiper.realIndex);
    }

    return (
        <div className="mx-auto">
            <div className="hidden md:block">
                <Swiper
                    className="max-w-4xl"
                    onSlideChange={handleSlideChange}
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView={6}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 20,
                        depth: 90,
                        modifier: 1,
                        slideShadows: true
                    }}>
                    <SwiperSlide />
                    {data.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div className={`w-96 rounded-lg h-[540px]  shadow-xl image-full relative  ${indexes === el.id ? 'border-2 border-yellow-400' : 'border-0'}`}>
                                <img src={el.img} className="w-full h-full rounded-lg object-cover" alt="slider-img" />
                                <h1 className="hover-stroke absolute -top-20 right-0 text-4xl w-full font-bold" data-text={el.title}>
                                    {el.title}
                                </h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="md:hidden  flex justify-center items-center flex-col space-y-4">
                {data.map((el) => (
                    <div className={`w-full rounded-lg h-[240px]  shadow-xl image-full relative  ${indexes === el.id ? 'border-2 border-yellow-400' : 'border-0'}`}>
                        <img src={el.img} className="w-full h-full rounded-lg object-cover" alt="slider-img" />
                        <h1 className="hover-stroke absolute -top-20 right-0 text-2xl w-full font-bold" data-text={el.title}>
                            {el.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Right;
