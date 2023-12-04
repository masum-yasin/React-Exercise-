import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-item'>
          
    <div>      
      <Link to='/'>Home</Link>
          <Link to='/review'>Order Review</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link></div>
        </nav>
    );
};

export default Header;