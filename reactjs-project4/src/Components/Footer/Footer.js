import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <h3>Colorlib.com</h3>
                <nav>
                    
                <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
           <div className='fontaswsome'>
          
           </div>
           </nav>
                <p> Copyright &copy;  MD Masum Hossain</p>
            </footer>
        </div>
    );
};

export default Footer;