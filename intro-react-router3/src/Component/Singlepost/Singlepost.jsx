import React from 'react';
import './Singlepost.css'

const Singlepost = ({post}) => {
    const {name,area,population,flags} = post;
    return (
        <div>
            
            <div className='singlepost'>
            <h3>Country Name:{name.common}</h3>
            <p>Area:{area}</p>
            <p>Population:{population}</p>
            <img src= {flags.png} alt="" />
            </div>
        </div>
    );
};

export default Singlepost;