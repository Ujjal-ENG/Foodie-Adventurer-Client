/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function AuthProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const createUser = async (name, photo, email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
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
            setIsLoading(false);
            toast.error('Invalid Email or Password!!!');
            navigate('/login');
        }
    };

    const logOutUser = async () => {
        await signOut(auth);
        navigate('/');
    };

    const singInGoogle = async () => {
        try {
            setIsLoading(true);
            await signInWithPopup(auth, provider);
            toast.success('Successfully Logged In using Google!!');
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error('Error ocurred while user try to SignIn with Google!!');
        }
    };
    const signInGitHub = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, gitHubProvider);
            toast.success('Successfully Logged In using GitHub!!');
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error('Email is already Exists!!');
        }
    };

    const updateUserProfile = async (name, photo) => {
        await updateProfile(userInfo, {
            displayName: name,
            photoURL: photo
        });
        toast.success('User name and picture is Updated Successfully!!!');
    };

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email);
        toast.success('Please Check Your Email,also check your spam folder!!!');
        navigate('/login');
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setPrivateLoad(false);
        });
        return () => unSubscriber();
    }, []);

    const auths = {
        privateLoad,
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle,
        signInGitHub,
        updateUserProfile,
        resetPassword,
        loading
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
