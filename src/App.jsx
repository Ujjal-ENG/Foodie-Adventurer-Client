/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import AuthProvider from './context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Navbar />

            <Outlet />

            <Footer />
        </AuthProvider>
    );
}

export default App;
