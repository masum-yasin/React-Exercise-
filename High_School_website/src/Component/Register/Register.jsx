import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <>
       <div className="d-flex flex-row register-section ">
       <div className="register-heading  col-lg-8">
         <h1>Register Now</h1>
            <p>There is a moment in the life of any aspiring astronomer that <br></br>it is time to buy that first telescope. It’s exciting to think about <br></br> setting up your own viewing station of your Attraction.</p>
          <div className='register-button'>
          <button>150<sub>Days</sub></button>
            <button>23<sub>Hours</sub></button>
            <button>47<sub>Mins</sub></button>
            <button>59<sub>Secs</sub></button>
          </div>
          </div>
          <div className="col-lg-4">
           
            <form action="">
            <caption>Courses For Free</caption>
                <input type="text" placeholder='Your Name' /><br></br><br></br>
                <input type="text" placeholder='Your Phone Number' /><br></br>
                <input type="text" placeholder='Your Email Address' /><br></br>
            
                <button>SUBMIT</button>
            </form>
          </div>
       </div>
        </>
    );
};

export default Register;