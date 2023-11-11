import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name,area,population,flags} =country;

    return (
        <div className='country'>
            <h3>Country Name:{name.common}</h3>
          
            <p>Population:{population}</p>
            <h5>Area:{area}</h5>
            <img src={flags.png} alt="" />
        
            
        </div>
    );
};

export default Country;