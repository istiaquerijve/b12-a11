import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Shared/Navber';
import Footer from '../Pages/Shared/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navber/> 
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Rootlayout;