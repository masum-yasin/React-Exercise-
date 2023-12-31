import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <>
        <div className='footer-background-color'>
        <div className='footer-section'>
         <div className='footer-heading'>
         <h4>Top Product</h4>
          <p>Managed Website</p>
          <p>Manage Reputation</p>
          <p>Power Tools</p>
          <p>Marketing Service</p>

         </div>
         <div className='footer-heading'>
          <h4>Quick Links</h4>
          <p>Jobs</p>
          <p>Brand Assets</p>
          <p>Investor Relations</p>
          <p>Terms of Service</p>
         </div>
         <div className='footer-heading'>
          <h4>Features</h4>
          <p>Jobs</p>
          <p>Brand Assets</p>
          <p>Investor Relations</p>
          <p>Terms of Service</p>
         </div>
         <div className='footer-heading'>
          <h4>Resources</h4>
          <p>Guides</p>
          <p>Research</p>
          <p>Experts</p>
          <p>Agencies</p>
         </div>
         <div className='footer-heading'>
          <h2>Newsletter</h2>
        <div className='bg-white p-4'>
        <form action="" className='footer-form'>
          <input type="text" placeholder='Enter Your Name' /><br></br><br></br>
            <input type="email" placeholder='Enter Your Email' /><br></br><br></br>
            <textarea name="" id="" cols="25" rows="5" placeholder='Enter Your comment' ></textarea>
      </form>
        </div>
         </div>
         </div> 
        <div className='footer-img'>
       <img src={'img/courses_icon/logo-light.png'} alt="" />
       </div>
       <div>
        <h3>FOLLOW US ON</h3>
        {/* <FontAwesomeIcon icon={faFacebook} /> */}
        <FontAwesomeIcon icon={faTwitter} />
      
       </div>
        </div>
      
        
        </>
    );
};

export default Footer;