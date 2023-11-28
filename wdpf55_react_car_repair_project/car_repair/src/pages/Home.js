// import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServiceC from './../Components/ServiceC';
import About from '../Components/About';
import Fact from '../Components/Fact';
import Booking from '../Components/Booking';
import TechnicianTeam from '../Components/TechnicianTeam';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <div>
             {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="assets/img/carousel-bg-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                    <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="assets/img/carousel-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="assets/img/carousel-bg-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                    <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="assets/img/carousel-2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Quality Servicing</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Expert Workers</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Modern Equipment</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- About Start --> */}
    <About/>
    {/* <!-- About End --> */}

{/* 
    <!-- Fact Start --> */}
    <Fact/>
    {/* <!-- Fact End --> */}


    {/* <!-- Service Start --> */}
    <ServiceC />
    {/* <!-- Service End --> */}


    {/* <!-- Booking Start --> */}
   <Booking></Booking>
    {/* <!-- Booking End --> */}


    {/* <!-- Team Start --> */}
    <TechnicianTeam/>
    {/* <!-- Team End --> */}


    {/* <!-- Testimonial Start --> */}
   <Testimonial/>
    {/* <!-- Testimonial End --> */}


   
        </div>
    );
};

export default Home;