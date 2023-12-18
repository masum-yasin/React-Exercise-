import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SingleService from "./SingleService";

const ServiceC = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/productsall')
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              {/* <div className="nav w-100 nav-pills me-4">
                {
                    product.map(service => <button
                        className="nav-link w-100 text-start p-4 mb-4 active"
                        data-bs-toggle="pill"
                        data-bs-target="#tab-pane-1"
                        type="button"
                      >
                        <div className="d-flex align-items-center text-start">
                          <i className="fa fa-car-side fa-2x me-3"></i>
                          <h5 className="m-0">Diagnostic Test</h5>
                          <br />
                        </div>
                        <h5 className="ms-5">
                          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                        </h5>
                      </button>)
                }
                
              
               
              </div> */}
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
{/*             
                 {product.map(service=>(
                     <div className="row g-4">
                   
                     <div className="col-md-6" style={{ minHeight: "350px" }}>
                       <div className="position-relative h-100">
                         <img
                           className=" img-fluid w-100 h-100"
                           src="assets/img/service-1.jpg"
                           style={{ objectFit: "cover" }}
                           alt=""
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <h3 className="mb-3">
                         15 Years Of Experience In Auto Servicing
                       </h3>
                       <p className="mb-4">
                         Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                         sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                         lorem et sit, sed stet lorem sit clita duo justo magna
                         dolore erat amet
                       </p>
 
                       <p>
                         <i className="fa fa-check text-success me-3"></i>Quality
                         Servicing
                       </p>
                       <p>
                         <i className="fa fa-check text-success me-3"></i>Expert
                         Workers
                       </p>
                       <p>
                         <i className="fa fa-check text-success me-3"></i>Modern
                         Equipment
                       </p>
                       <h3
                         className="bg-warning text-white mt-5 "
                         style={{ borderRadius: "15px" }}
                       >
                         $850
                       </h3>
 
                       <a href="" className="btn btn-primary py-3 px-5 mt-3">
                         Read More<i className="fa fa-arrow-right ms-3"></i>
                       </a>
                     </div>
                   </div>
                 ))} */}
                       
                   
                  
                </div>
{/* 
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/service-2.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Service Price : $550
                      </h3>

                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/service-3.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Service Price:$1150
                      </h3>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/service-4.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Service Price:$630
                      </h3>

                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="tab-pane fade" id="tab-pane-5">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/pexels-andrea-piacquadio-3807517.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Service Price:$950
                      </h3>

                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="tab-pane fade" id="tab-pane-6">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/pexels-cottonbro-studio-4482050 (1).jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Service Price:$450
                      </h3>

                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* <div className="tab-pane fade" id="tab-pane-7">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="assets/img/pexels-erik-mclean-7561184.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3 ">
                        15 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <h3
                        className="bg-warning text-white mt-5 "
                        style={{ borderRadius: "15px" }}
                      >
                        {" "}
                        Serice Price:$1020
                      </h3>

                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <h1> Here is Our All Services </h1>

         <div className="row">
         {product.map((item) => (
              <SingleService data={item} key={item.id}/>
            ))}
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceC;
