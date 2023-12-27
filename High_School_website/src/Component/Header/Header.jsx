import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


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
                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to='about' class="nav-link" >About</Link>
              </li>
              <li class="nav-item">
                <Link to='contact' class="nav-link" href="#">Contact</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to='blog' class="dropdown-item" href="#">Blog</Link></li>
                  <li><a class="dropdown-item" href="#">Blog Details</a></li>
                  
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to='/course' class="dropdown-item" href="#">Course</Link></li>
                  <li><Link to='/coursedetails' class="dropdown-item" href="#">Courses Details</Link></li>
                  
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