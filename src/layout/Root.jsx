import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const Root = () => {
    return (
        <>
            <nav className='shadow-md'>      <Navbar /></nav>

            <main> <Outlet /></main>
            <footer>   <Footer /></footer>
        </>
    );
};

export default Root;