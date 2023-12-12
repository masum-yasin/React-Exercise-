import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Course = () => {
    return (
         <>
            <h2 className='courese-heading fw-bolder'>Oure Popular Coureses</h2>
            <p className='text-center fst-italic'>Replenish man have thing gathering lights yielding shall you</p>
     <div className='courses-section'>
     <div>
              <div>
              <div className='img-transform'>
              <img className='course-img' src={'img/courses/c1.jpg'} alt="" />
              
             <h2><button className='courses-price'>$90</button></h2>
             <button className='button-2'>DESIGN</button>
             <h4>Computer Engineering</h4>
              </div>
             <p>Computer engineering is solidly grounded<br></br> in the theories and principles of computing<br></br> science, and engineering and it applies these</p>
             
             <div className='courses-icon'>
             <img className='course-img' src= {'img/courses/author3.png'} alt="" />
          <div> <h6>Cameron</h6></div>
           <div><FontAwesomeIcon icon={faUser}  size="lg"/></div>
           <div><FontAwesomeIcon icon={faHeart}  size="lg"/></div>
          </div>
           
              </div>
            </div>
            <div>
              <div>
              <div className='img-transform'>
              <img className='course-img' src="img/courses/c2.jpg" alt="" />
             
              <h2><button className='courses-price'>$90</button></h2>
             <button className='button-2'>DESIGN</button>
             <h4>Computer Engineering</h4>
              </div>
             <p>Computer engineering is solidly grounded<br></br> in the theories and principles of computing<br></br> science, and engineering and it applies these</p>
            
             <div className='courses-icon course'>
             <img src={'img/courses/author2.png'} alt="" />
          <div> <h6>Cameron</h6></div>
           <div><FontAwesomeIcon icon={faUser}  size="lg"/></div>
           <div><FontAwesomeIcon icon={faHeart}  size="lg"/></div>
          </div>
           
              </div>
            </div>
            <div>
              <div>
              <div className='img-transform'>
              <img className='course-img' src="img/courses/c3.jpg" alt="" />
            
              <h2><button className='courses-price'>$90</button></h2>
             <button className='button-2'>DESIGN</button>
             <h4>Computer Engineering</h4>
              </div>
             <p>Computer engineering is solidly grounded<br></br> in the theories and principles of computing<br></br> science, and engineering and it applies these</p>
            
          <div className='courses-icon course'>
          <img src="img/courses/author1.png" alt="" />
          <div> <h6>Cameron</h6></div>
           <div><FontAwesomeIcon icon={faUser}  size="lg"/></div>
           <div><FontAwesomeIcon icon={faHeart}  size="lg"/></div>
          </div>
           </div>
            </div>

     </div>
        </>  
       
    );
};

export default Course;