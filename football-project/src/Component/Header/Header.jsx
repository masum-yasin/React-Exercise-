import React from 'react';
import './Header.css'
// import logo from 'logo.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                {/* <img src={logo} alt="" /> */}
            </div>
         <a href="/">Home</a>
         <a href="/about">About</a>
         <a href="/service">Service</a>
         <a href="contact">Contact</a>
         <a href="blog">Blog</a>   
        </nav>
    );
};

export default Header;