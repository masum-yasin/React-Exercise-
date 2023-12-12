import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import {faFacebook } from '@fortawesome/free-solid-svg-icons'
import './ExpertTrainer.css';

const ExpertTrainer = () => {
    return (
        <>
        <h2 className='expert-trainer fw-bolder text-center'>Our Expert Trainers</h2>
        <p className='fst-italic text-center'>Replenish man have thing gathering lights yielding shall you</p>
      {/* Expert Trainer Start */}
        <div className=" trainer-main-row row ms-3">
        <div className="col-md-3"> 
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img className='Expert-tainer-img'  src={"img/trainer/t1.jpg"} alt="" />
           <div className='expert-heading text-center mt-4'>
           <h5 className='fw-bolder'>Mated Nithan</h5>
            <h6>Sr. web designer</h6>
            <p>If you are looking at blank <br></br>cassettes on the web, you <br></br>may be very confused at the.</p>
            </div>

           </div>
          
          </div>
          <div className="col-md-3">
            <div className='d-flex flex-column justify-content-center align-items-center' >
            <img className='Expert-tainer-img' src= {'img/trainer/t2.jpg'} alt="" />
            <div className=' expert-heading text-center mt-4'>
           <h5 className='fw-bolder'>David Cameron</h5>
            <h6>Sr.Tecnologiest</h6>
            <p>If you are looking at blank <br></br>cassettes on the web, you <br></br>may be very confused at the.</p>
            </div>
           </div>
          </div>
          <div className="col-md-3">
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <img className='Expert-tainer-img' src={'img/trainer/t3.jpg'} alt="" />
            <div className='expert-heading text-center mt-4'>
           <h5 className='fw-bolder'>Jain Redme</h5>
            <h6>Sr. Faculty Data Science</h6>
            <p>If you are looking at blank <br></br>cassettes on the web, you <br></br>may be very confused at the.</p>
           </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <img className='Expert-tainer-img' src={'img/trainer/t4.jpg'} alt="" />
            <div className=' expert-heading text-center mt-4'>
           <h5 className='fw-bolder'>Nathan Macken</h5>
            <h6>Grapic Designer</h6>
            <p>If you are looking at blank <br></br>cassettes on the web, you <br></br>may be very confused at the.</p>
           </div>
            </div>
          </div>
        </div>


        </>
    );
};

export default ExpertTrainer;