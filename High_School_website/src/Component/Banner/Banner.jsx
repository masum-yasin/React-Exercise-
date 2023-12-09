import React from 'react';
import './Banner.css'
// import backgroundImage from '../../../img/banner/home-banner.jpg'


const Banner = () => {
    return (
        <div className='header-section'>
            <h4 className='font-weight bold text-center mt-5'>BEST ONLINE EDUCATION SERVICE IN THE WORLD</h4>
            <h1 className='fw-bolder text-center mt-4 '>ONE STEP AHEAD THIS SEASON</h1>
          <div className='d-flex justify-content-center align-content-center g-4 mt-5'>
          <div> <button className='button1 text-center'>LEARN MORE</button></div>
           <div> <button className='button2 text-center'>SEE COURSE</button></div>
          </div>
        
        </div>
    );
};

export default Banner;