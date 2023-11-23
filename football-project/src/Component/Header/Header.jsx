import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
         <img src={'image/logo2-removebg-preview.png'} alt="" />
         <div>
        <Link to='/'>Home</Link>
       <Link to='.about'></Link>
         <a href='/playerlist'>Playerlist</a>
         <a href="/service">Service</a>
         <a href="contact">Contact</a>
         <a href="blog">Blog</a>   
         </div>
        </nav>
    );
};

export default Header;