import React from 'react';
import Service from './../pages/Service';
import { Link } from 'react-router-dom';

const SingleCourse = ({myserive}) => {
 const {id,service,description,price,image,date_created}=myserive;
    // console.log(myserive);

    return (
<div className='col-lg-3'>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src='assets/img/pexels-tim-samuel-5835359.jpg' alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title text-warning">{service}</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul className="list-group list-group-flush">
<li className="list-group-item text-danger">{date_created}</li>
    
  </ul>
  <div className="card-body">
    <Link to={`/service/${id}`} className="card-link btn btn-info text-white">Service Details</Link>
  
  </div>
</div>
</div>
    );
};

export default SingleCourse;