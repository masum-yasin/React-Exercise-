import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
        <Header></Header>
         <h1>This is Home Page</h1>
         <Outlet></Outlet>   
        </>
    );
};

export default Home;