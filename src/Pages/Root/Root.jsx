import React from 'react';
import Navbar from '../Navbar/Navbar';  
import Footer from '../Footer/Footer';  
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-4'>
                <Outlet />
            </main>
            <Footer />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default Root;