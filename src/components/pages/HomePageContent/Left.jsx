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
                <span className="hover-stroke text-6xl w-full font-bold" data-text="The world is a book and those who do not travel read only one page">
                    The world is a book and those who do not travel read only one page
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
