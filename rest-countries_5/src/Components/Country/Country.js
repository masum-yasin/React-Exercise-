import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,area,region,population} =props.country
   
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <p>Area:{area}</p>
            <h4>Population:{population}</h4>
            <p>Region:{region}</p>
        </div>
    );
};

export default Country;