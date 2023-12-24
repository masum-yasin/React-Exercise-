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
        <div>
        <form className='mt-5'>
        <div className="form-group row mt-5">
    <label htmlFor="inputName" className="col-sm-1 col-form-label">Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputName" placeholder="Enter Your Name" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputState" className="col-sm-1 col-form-label">State</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputState" placeholder=" Enter State" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-6">
      <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputPhone" className="col-sm-1 col-form-label">Phone</label>
    <div className="col-sm-6">
      <input type="number" className="form-control" id="inputPhone" placeholder=" Enter Phone Number" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputSubject" className="col-sm-1 col-form-label">Subject</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputSubject" placeholder="Enter Subject" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputSubject" className="col-sm-1 col-form-label">Subject</label>
    <div className="col-sm-6">
      <textarea name="" id="" cols="30" rows="4"   style={{height: "100px"}}
 className="form-control"  placeholder="Address"></textarea>
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputsubmit" className="col-sm-1 col-form-label">SUBMIT</label>
    <div className="col-sm-1">
      <input type="submit" className="form-control" id="inputSubmit" placeholder="Submit" />
    </div>
  </div>
</form>
        </div>
        <div> <h1>Here are map stand</h1></div>
       

        </>
    );
};

export default Contact;