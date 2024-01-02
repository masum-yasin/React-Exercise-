import React from 'react';
import './Header.css'
import {  NavLink } from 'react-router-dom';


const Header = () => {
    return (
 <>
 <nav class="main-navbar navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={'img/logo.jpg'} 
          alt="" /></a>
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to='/' class="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='about' class="nav-link" >About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='contact' class="nav-link" href="#">Contact</NavLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink to='blog' class="dropdown-item" href="#">Blog</NavLink></li>
                  <li><a class="dropdown-item" href="#">Blog Details</a></li>
                  
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><NavLink to='/course' class="dropdown-item" href="#">Course</NavLink></li>
                  <li><NavLink to='/coursedetails' class="dropdown-item" href="#">Courses Details</NavLink></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      
      </nav>
     
 </>

   
    );
};

export default Header;