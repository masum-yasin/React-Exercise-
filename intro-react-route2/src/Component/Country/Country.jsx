import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name,area,population,flags}=country;
    return (
        <div className='country'>
           <h3>Country Name:{name.common}</h3> 
           <p>Area:{area}</p>
           <p>population:{population}</p>
          <img src= {flags.png} alt="" />
       
           
        </div>
    );
};

export default Country;