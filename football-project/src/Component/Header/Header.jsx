import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
         <img src={'image/logo2-removebg-preview.png'} alt="" />
         <div>
        <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/playerlist'>Playerlist</Link>
       <Link to='/service'>Service</Link>
        <Link href="contact">Contact</Link>
         <Link href="blog">Blog</Link>   
         </div>
        </nav>
    );
};

export default Header;