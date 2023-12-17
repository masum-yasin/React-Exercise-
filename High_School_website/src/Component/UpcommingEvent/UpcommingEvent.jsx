import React from 'react';
import './UpcommingEvent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const UpcommingEvent = () => {
    return (
        <>
            <div className='upcomming-event '>
          <div>
          <h1 className='fw-bolder upcomming-header text-white'>Upcomming Events</h1>
                <p className='fst-italic text-white'>Replenish man have thing gathering lights yielding shall you</p>
                </div>
         
          <div className=" event-image-main-div row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <img className='event-img' src={'img/event/e2.jpg'} alt="" />
            </div>
            <div className="col-md-6">
                <img src={'img/event/e1.jpg'} alt="" />
            </div>
            </div>
            <h6 className=' upcomming-arrow text-center mt-5 text-warning'>View All Event <FontAwesomeIcon icon={ faArrowRight}  size="lg"/></h6>
        
          </div>
            </>
    );
};

export default UpcommingEvent;