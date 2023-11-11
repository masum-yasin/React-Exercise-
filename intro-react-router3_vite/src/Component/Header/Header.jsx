import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../Activelink/ActiveLink';


const Header = () => {
    return (
      <nav>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='posts'>Post</ActiveLink>
        <ActiveLink to='countries'>Countries</ActiveLink>
        <ActiveLink to='contact'>Contact</ActiveLink>
        <ActiveLink to='friends'>Friends</ActiveLink>
      </nav>
    );
};

export default Header;