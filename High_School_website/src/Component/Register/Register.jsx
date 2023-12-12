import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="row register-section ">
  
        {/* left section */}
        <div className="register-heading col-lg-7 col-sm-12">
          <h1>Register Now</h1>
          <p>
            There is a moment in the life of any aspiring astronomer that{" "}
            <br></br>it is time to buy that first telescope. It’s exciting to
            think about <br></br> setting up your own viewing station of your
            Attraction.
          </p>
          <div className="register-button">
            <button>
              150<sub>Days</sub>
            </button>
            <button>
              23<sub>Hours</sub>
            </button>
            <button>
              47<sub>Mins</sub>
            </button>
            <button>
              59<sub>Secs</sub>
            </button>
          </div>
        </div>

{/* right section */}
        <div className="courses-form col-lg-5 col-sm-12">
          <div className="bg-white p-5 w-75">
            <fieldset>
              <legend className="text-dark">Courses For Free</legend>
              <h5 className="text-dark">It is high time for learning</h5>
              <form action="">
                <input type="text" placeholder="Your Name" />
                <br></br>
                <input type="text" placeholder="Your Phone Number" />
                <br></br>
                <input type="text" placeholder="Your Email Address" />
                <br></br>
                <button>SUBMIT</button>
              </form>
            </fieldset>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Register;
