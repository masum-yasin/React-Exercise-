import React from 'react';
import ServiceC from '../Components/ServiceC';


import BookingC from '../Components/Booking';
import QuestionC from '../Components/QuestionC';

const Booking = () => {
    return (
        <>
           {/* <!-- Service Start --> */}
    <ServiceC></ServiceC>
    {/* <!-- Service End --> */}


    {/* <!-- Booking Start --> */}
    <BookingC/>
    {/* <!-- Booking End --> */}


    {/* <!-- Call To Action Start --> */}
   <QuestionC/>
    {/* <!-- Call To Action End -->   */}
        </>
    );
};

export default Booking;