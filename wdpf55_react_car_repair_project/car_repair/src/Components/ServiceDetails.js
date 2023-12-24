import React, { useState } from "react";
// import Service from "./../pages/Service";

import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails[0].service);

  const [customerInfo, setCustomerInfo] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        customerInsert();
       
    }
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setCustomerInfo((val)=>({...val, [name]:value}));
    }
    const customerInsert = ()=>{
      const dataTospand ={
        ...customerInfo,
        service_name:serviceDetails[0].service,
        price:serviceDetails[0].price
      }
        axios.post("http://localhost/React_Exercise/React-Exercise-/wdpf55_react_car_repair_project/car_repair/api/Booking.php", {data:dataTospand}).then(res=>{
            alert(res.data.msg);
            // return navigate('/contact');
        })
        console.log(customerInfo);
       
    }
  return (
    <>
      <div className="row">
        <div className="col-lg-3 mt-5 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="/assets/img/pexels-tim-samuel-5835359.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h4 className="card-title text-warning  fw-bolder">
                Service Name:{serviceDetails[0].service}
              </h4>
              <h6 className="card-title text-info ">
                Service Price:{serviceDetails[0].price}
              </h6>
              <p className="card-text fst-italic fw-bold ">
                Description:{serviceDetails[0].description}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-danger">
                Created_Date{serviceDetails[0].date_created}
              </li>
            </ul>
          </div>
        </div>

  <div className="col-lg-6 mt-5">
  <ul>
        <h4 className="text-success">OIL & FILTER</h4>
        <li className="mt-2 fst-italic">The motor oil in your vehicle’s engine serves a whole slew of functions: it lubricates the moving parts, helps act as a sealant against debris, cools the engine, reduces wear and tear, and helps prevent engine corrosion.</li>
        <h4 className="mt-2 text-success">ROTATE TIRES</h4>
        <li className='mt-2 fst-italic'>Depending on your vehicle alignment, usage, and many other factors, the tread wear patterns on your tires may vary between the front and back tires, or even from one side of the tread to the other</li>
        <h4 className="mt-2 text-success">TRANSFER CASE FLUID</h4>
        <li className="mt-2 fst-italic">In four-wheel or all-wheel drive vehicles, the transfer case is what shifts power from the transmission to the axles. You’ll need to have the transfer case fluid checked according to the vehicle </li>
        <h4 className="mt-2 text-success">COOLANT FLUID EXCHANGE</h4>
        <li className="fst-italic mt-2">The radiator in your car is a vital component that helps keep your engine cool and functioning properly. Having your coolant system flushed regularly will help get rid of contaminants that can build up inside as well as ensure that</li>
        <h4 className="mt-2 text-success">SERPENTINE BELT</h4>
        <li className="mt-2 fst-italic">Although may seem like a simple piece of rubber, your vehicle’s serpentine belt is essential to keeping your car running by powering peripheral devices such as your alternator, power steering pump, and air conditioner</li>
        <h4 className="mt-2 text-success">SEASONAL CHECK-UPS</h4>
        <li className="mt-2  fst-italic">The needs of your vehicle can vary by season and driving conditions. Following are a few suggestions to add to the notes section of your vehicle maintenance checklist:</li>
       </ul>
  </div>
  <div className="col-lg-3 mt-5 border border-dark p-5">
  <form action="" onSubmit={handleSubmit} >
    <img className="mb-4 border" src="/assets/img/pexels-andrea-piacquadio-3807517.jpg"  style={{width:'300px', borderColor:'orange'}}  alt="" />
    <h3 className="card-title text-danger  fw-bolder">
                Service Name:{serviceDetails[0].service}
              </h3>
              <h4 className="card-title text-success ">
                Service Price:{serviceDetails[0].price}
              </h4>

    <input type="text" placeholder="Enter Your Name" style={{padding:'15px', width:'300px',marginTop:'10px',  borderColor:'orange'}} onChange={handleChange} name="user_name" />
    <input type="number" placeholder="Enter Your Number" style={{padding:'15px', width:'300px',marginTop:'10px', borderColor:'orange'}} onChange={handleChange} name="mobile"/>

    <input type="submit" name="submit" placeholder="submit" style={{padding:'15px', width:'300px',marginTop:'10px', borderColor:'orange'}}/>
  </form>
  </div>
      </div>
    </>
  );
};

export default ServiceDetails;
