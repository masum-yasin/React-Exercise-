import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo}  alt="" />
           <div>
            <a href="/shop">Shop</a>
       
            <a href="/shop"></a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;