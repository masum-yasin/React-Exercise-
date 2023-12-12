import React from 'react';
import './AwesomeFeatures.css'

const AwesomeFeatures = () => {
    return (
        <>
           <h1 className='awesometitle fw-bolder text-bg-dark text-center'>Awesome Feature</h1>
           <p className=' text-center mb-5 fst-italic'>Replenish man have thing gathering lights yielding shall you</p>
           <div className="card-group">
  <div className=" awesome-card card">
    <img src={'img/features/f1.png'} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title fw-bold ">Scholarship Facility</h5>
      <p className="card-text fst-italic">If you’re applying for a scholarship, chances are you are going to need to write an essay. Very few scholarship programs are based solely on an application form or transcript.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="awesome-card card">
    <img src={'img/features/f2.png'} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title fw-bold">Sell Online Course</h5>
      <p className="card-text fst-italic">Today, almost every person has heard about online classes. Previously, only very few educational institutions offered online classes for a few courses.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className=" awesome-card card">
    <img src={'img/features/f3.png'} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title fw-bold">Global Certification</h5>
      <p className="card-text fst-italic">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

        </>
    );
};

export default AwesomeFeatures;