import React from 'react';
import{Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Post</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/friends'>Friends</Link>
        </nav>
    );
};

export default Header;