import React from 'react';
import ServiceC from '../Components/ServiceC';

import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../Components/SingleCourse';

const Service = () => {
    const serviceData = useLoaderData();
    console.log(serviceData);
    return (
        <>
        {/* <!-- Service Start --> */}
            <ServiceC/>

        {/* <!-- Service End -->   */}

    <div className='row container-fluid mt-5'>

    {
        serviceData.map(data=><SingleCourse key={data.id} myserive={data}></SingleCourse>)
       }
    </div>
        </>
    );
};

export default Service;