/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import 'aos/dist/aos.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import 'swiper/swiper-bundle.min.css';
import './index.css';
import { router } from './routes/App.Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster />
        <RouterProvider router={router} />
    </>
);
