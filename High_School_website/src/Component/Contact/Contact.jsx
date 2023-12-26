import React from 'react';
import './Contact.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Contact = () => {
    return (
        <>
        <div className='contact-section'>
            <div className='contact-heading'>
            <h1>Contact Us</h1>
           
            </div>
      <div className='link_page'>
      <Breadcrumb></Breadcrumb>
      </div>
            </div> 
            {/* Contact form start */}

            <div className="row container m-lg-5 p-lg-3">

          
        <form className='mt-5 col-lg-7'>
        <div className="form-group row mt-5">
    <label htmlFor="inputName" className="col-sm-1 col-form-label">Name</label>
    <div className="col-sm-8">
      <input type="text" className="form-control p-3" id="inputName" placeholder="Enter Your Name" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputState" className="col-sm-1 col-form-label">State</label>
    <div className="col-sm-8">
      <input type="text" className="form-control p-3" id="inputState" placeholder=" Enter State" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control p-3" id="inputEmail" placeholder="Enter Email" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputPhone" className="col-sm-1 col-form-label">Phone</label>
    <div className="col-sm-8">
      <input type="number" className="form-control p-3" id="inputPhone" placeholder=" Enter Phone Number" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputSubject" className="col-sm-1 col-form-label">Subject</label>
    <div className="col-sm-8">
      <input type="text" className="form-control p-3" id="inputSubject" placeholder="Enter Subject" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputSubject" className="col-sm-1 col-form-label">Subject</label>
    <div className="col-sm-8">
      <textarea name="" id="" cols="30" rows="4"   style={{height: "100px"}}
 className="form-control"  placeholder="Address"></textarea>
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputsubmit" className="col-sm-1 col-form-label">SUBMIT</label>
    <div className="col-lg-8">
      <input type="submit" className="form-control button p-3" id="inputSubmit" placeholder="Submit" />
    </div>
  </div>
</form>
          <div className='container col-lg-5 mt-5'> <h1>Here are map stand</h1>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.406343693924!2d90.42292967364527!3d23.768540378657946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7892dcf0001%3A0x853ad729be4edc71!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1703574608783!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        
        </div>
            </div>
    
       

        </>
    );
};

export default Contact;