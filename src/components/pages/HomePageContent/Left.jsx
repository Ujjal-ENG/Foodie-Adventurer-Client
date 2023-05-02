/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import { motion } from 'framer-motion';
import React from 'react';

function Left({ data, id }) {
    if (data === null || id === 0) {
        return (
            <motion.div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0" initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                <span
                    className="hover-stroke text-2xl md:text-3xl lg:text-4xl xl:text-5xl  w-full font-bold text-center md:text-left"
                    data-text="Food is not just fuel, it's information. It talks to your DNA and tells it what to do, how to behave, and whether to express or suppress certain genes. So, eat the best and make your body sing with joy!">
                    Food is not just fuel, it's information. It talks to your DNA and tells it what to do, how to behave, and whether to express or suppress certain genes. So, eat the best and make
                    your body sing with joy!
                </span>
            </motion.div>
        );
    }
    return (
        <motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="w-full space-y-4">
            <h1 className="hover-stroke uppercase tracking-widest text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center md:text-left" data-text={data.title}>
                {data.title}
            </h1>
            <p className="text-gray-100 font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-center md:text-left">{`${data.description}`}</p>
        </motion.div>
    );
}

export default Left;
