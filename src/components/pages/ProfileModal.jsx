/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function ProfileModal({ photo, name, email }) {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img src={photo} alt={name} className="mask mask-squircle w-36 object-cover" />
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="py-4">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
