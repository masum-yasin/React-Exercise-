import React from 'react';
import './About.css'
import AwesomeFeatures from './../AwesomeFeatures/AwesomeFeatures';

import Client from './../Client/Client';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';


const AboutC = () => {
    return (
        <>
         <div className='about-section'>
        <div className='about_content'>
          <h2>About Us</h2>
        </div>
        <div className='link_page'>
          {/* <Link to="/">Home /</Link>
          <a href="/about">About Us</a> */}
          <Breadcrumb></Breadcrumb>
        </div>
         </div>
         <div className="welcome-img-section row">
          <div className="col-md-6">
            <img src= {'img/about.png'} alt="" />
          </div>
          <div className="col-md-6">
            <h3 className='fw-bolder'>Welcome to our Institute</h3>
            <p className='mt-5'>Subdue whales void god which living don't midst lesser<br></br> yielding over lights whose. Cattle greater brought sixth<br></br> fly den dry good tree isn't seed stars were.</p>

    <p className='mt-5'>Subdue whales void god which living don't midst lesser<br></br> yieldi over lights whose. Cattle greater brought sixth fly<br></br> den dry good tree isn't seed stars were the boring.
    Research<br></br> has found that education is the strongest determinant of<br></br> individuals.</p>
            <button className='about-button'>LEARN MORE</button>
          </div>
         </div>
       <AwesomeFeatures></AwesomeFeatures>
        <Client></Client>
         
        </>
    );
};

export default AboutC;