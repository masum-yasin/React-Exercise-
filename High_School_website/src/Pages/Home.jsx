import React, { useState } from 'react';
import Banner from '../Component/Banner/Banner';
import AwesomeFeatures from '../Component/AwesomeFeatures/AwesomeFeatures';
import Course from '../Component/Courese/Course';
import Serive from '../Component/Service/Serive';

const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <AwesomeFeatures/>
            <Course/>
            <Serive></Serive>
            
        </div>
    );
};

export default Home;