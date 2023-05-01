/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function AuthProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const crearteUser = async (name, email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name
            });
            toast.success('User is Created Successfully!!!');
            signOut(auth);
            setIsLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            toast.error('There was an error while creating user!!');
        }
    };

    const signInUser = async (email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            toast.success('User is Logged in Successfully!!!');
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            toast.error('There was an error while signIn user!!');
        }
    };

    const logOutUser = async () => {
        await signOut(auth);
    };

    const singInGoogle = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, provider);
            toast.success('Successfully Logged In');
            setIsLoading(false);
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            toast.error('Error occured while user try to SignIn with Google!!');
        }
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setPrivateLoad(false);
        });
        return () => unSubscriber();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    const auths = {
        privateLoad,
        userInfo,
        crearteUser,
        signInUser,
        logOutUser,
        singInGoogle
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
