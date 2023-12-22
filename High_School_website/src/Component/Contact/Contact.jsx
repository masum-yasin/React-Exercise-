import React from 'react';
import './Contact.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Contact = () => {
    return (
        <>
        <div className='contact-section'>
            <div className='contact-heading'>
            <h1>Contact Us</h1>
           
            </div>
      <div className='link_page'>
      <Breadcrumb></Breadcrumb>
      </div>
            </div> 
        </>
    );
};

export default Contact;