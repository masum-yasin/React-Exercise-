import React from 'react';
import Banner from '../Component/Banner/Banner';
import AwesomeFeatures from '../Component/AwesomeFeatures/AwesomeFeatures';
import Course from '../Component/Courese/Course';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AwesomeFeatures/>
            <Course/>
            
        </div>
    );
};

export default Home;