import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    return (
        <div className='country'>
            <h1>Country Name:{props.name}</h1>
            <p>Population:{props.country.Population}</p>
            <p><small>{props.region}</small></p>
            <p>Area:{props.country.area}</p>
        </div>
    );
};

export default Country;