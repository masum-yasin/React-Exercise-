import React from 'react';
import './BlogC.css'
import Breadcrumb from '../Breadcrumb/Breadcrumb';


const BlogC = () => {
    return (
      <>
        {/* header img start */}
        <div className='blog-header-img'>
          <img src={'img/banner/pexels-keira-burton-6146978.jpg'} alt="" />
          {/* header image ending*/}
        <div className='blog-breadcrumb mt-5 border-5  text-center'>
                <Breadcrumb></Breadcrumb>
                <hr />
       </div>
       <div className='blog-heading'><h1>Our Education Blog</h1></div>
    </div>
    <div className="row">
        <div className="container col-lg-8 mt-5">
     <img src={'img/blog/blog1-770x450 (1).jpg'} alt="" />
        </div>
        <div className="col-lg-4 mt-5">
        <form className="d-flex">
        
  <div className='search-form'>
    <h4>Search Form</h4>
    <input classname=" form-control me-2" type="search" placeholder="Here are Search" aria-label="Search" />
    <button classname="btn btn-outline-primary" type="submit">Search</button>
  </div>
</form>


        </div>
    </div>
      </>
    );
};

export default BlogC;