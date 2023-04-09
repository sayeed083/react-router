import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div  className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;