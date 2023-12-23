import React from 'react';
import Service from './../pages/Service';

import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    // console.log(serviceDetails[0]);
    return (
        <>
            <div className='col-lg-3 mt-5 d-flex justify-content-center align-items-center'>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src='/assets/img/pexels-tim-samuel-5835359.jpg' alt="Card image cap" />
  <div className="card-body">
    <h4 className="card-title text-warning">Service Name:{serviceDetails[0].service}</h4>
    <h6 className="card-title text-info">Service Name:{serviceDetails[0].price}</h6>
        <p className="card-text">Description:{serviceDetails[0].description}</p>
  </div>
  <ul className="list-group list-group-flush">
<li className="list-group-item">Created_Date{serviceDetails[0].date_created}</li>
    
  </ul>
  
</div>
</div>

        </>
    );
};

export default ServiceDetails;