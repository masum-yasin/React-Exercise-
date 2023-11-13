import React from 'react';

const Headphone = (props) => {
    return (
        <div>
           <h2>These are Here Headphone Information</h2> 
           <h5>Headphone Name:{props.headphone}</h5>
           <p>Price{props.price}</p>
           <p>Model:{props.model}</p>
        </div>
    );
};

export default Headphone;