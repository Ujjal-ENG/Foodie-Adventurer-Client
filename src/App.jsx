/* eslint-disable react/jsx-indent */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import AuthProvider from './context/AuthProvider';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the original trigger point
            easing: 'ease', // Easing function for the animation
            once: true // Whether the animation should only occur once or every time the element is scrolled to
        });
    }, []);
    return (
        <AuthProvider>
            <Navbar />
            <div className="min-h-[calc(100vh-308px)]">
                <Outlet />
            </div>

            <Footer />
        </AuthProvider>
    );
}

export default App;
