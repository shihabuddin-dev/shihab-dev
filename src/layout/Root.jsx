import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <>
            <nav><Navbar /></nav>
            <main className='mt-22'> <Outlet /></main>
            <footer className='border-t-1 border-dashed border-primary/30'>   <Footer /></footer>
        </>
    );
};

export default Root;