import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,area,region,flags}= props.country
    console.log(props.country);
    return (
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Region:{region}</h3>
            <p>Population:{population}</p>
            <h4>Area:{area}</h4>

        </div>
    );
};

export default Country;