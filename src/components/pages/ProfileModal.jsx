/* eslint-disable comma-dangle */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function ProfileModal({ photo, name, email }) {
    const { updateUserProfile } = useContext(AuthContext);
    const [isClicked, setIsClicked] = useState(false);
    const [formData, setFormData] = useState({
        name,
        photo
    });

    const handleChange = (e) => {
        setFormData((ps) => ({
            ...ps,
            [e.target.id]: e.target.value
        }));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserProfile(formData.name, formData.photo);
        window.location.reload();
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src={photo} alt={name} className="mask mask-squircle w-36 object-cover" />
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="py-4">{email}</p>
                    </div>
                    <h1 className={`text-2xl font-bold text-clip ${isClicked ? 'hidden' : 'block'}`}>
                        Can you Update your Profile Picture or Name?
                        <button type="button" onClick={() => setIsClicked(!isClicked)} className="btn btn-xs">
                            Yes?
                        </button>
                    </h1>
                    {isClicked && (
                        <form action="" onSubmit={handleUpdate}>
                            <div className="flex justify-between gap-3 py-2">
                                <input type="text" id="name" placeholder="Type here" value={formData.name} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />
                                <input type="text" id="photo" placeholder="Type here" value={formData.photo} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="btn btn-primary btn-sm" type="submit">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
