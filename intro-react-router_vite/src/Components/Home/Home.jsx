import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <>
        <Header></Header>
       <div>{navigation.state==='Loading'? "Loading...." :""}</div>
         <Outlet></Outlet>   
        </>
    );
};

export default Home;