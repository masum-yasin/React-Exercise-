import React from 'react';
import './About.css'

const AboutC = () => {
    return (
        <>
         <div className='about-section'>
        <div className='about_content'>
          <h2>About Us</h2>
        </div>
        <div className='link_page'>
          <a href="index.html">Home</a>
          <a href="about_us.html">About Us</a>
        </div>
         </div>
         <div className="welcome-img-section row">
          <div className="col-md-6">
            <img src= {'img/about.png'} alt="" />
          </div>
          <div className="col-md-6">
            <h3 className='fw-bolder'>Welcome to our Institute</h3>
            <p>Subdue whales void god which living don't midst lesser<br></br> yielding over lights whose. Cattle greater brought sixth<br></br> fly den dry good tree isn't seed stars were.</p>

    <p className='mt-5'>Subdue whales void god which living don't midst lesser<br></br> yieldi over lights whose. Cattle greater brought sixth fly<br></br> den dry good tree isn't seed stars were the boring.</p>
            <button>LEARN MORE</button>
          </div>
         </div>
         
        </>
    );
};

export default AboutC;