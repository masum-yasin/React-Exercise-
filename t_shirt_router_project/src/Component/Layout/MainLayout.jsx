import React from 'react';
import Header from '../Header/Header';
import{Outlet} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import Grandpa from '../Grandpa/Grandpa';


const MainLayout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
         
           <Toaster />
           

        </div>
    );
};

export default MainLayout;