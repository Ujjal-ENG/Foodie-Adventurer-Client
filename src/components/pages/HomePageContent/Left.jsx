/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import React from 'react';

function Left({ data, id }) {
    if (data === null || id === 0) {
        return (
            <div className="px-4">
                <span
                    className="hover-stroke text-4xl w-full font-bold"
                    data-text="Food is not just fuel, it's information. It talks to your DNA and tells it what to do, how to behave, and whether to express or suppress certain genes. So, eat the best and make your body sing with joy!">
                    Food is not just fuel, it's information. It talks to your DNA and tells it what to do, how to behave, and whether to express or suppress certain genes. So, eat the best and make
                    your body sing with joy!
                </span>
            </div>
        );
    }
    return (
        <div className="w-full space-y-4">
            <h1 className="hover-stroke uppercase tracking-widest text-5xl font-bold " data-text={data.title}>
                {data.title}
            </h1>
            <p className="text-gray-100 font-bold text-xl tracking-wider ">{`${data.description}`}</p>
        </div>
    );
}

export default Left;
