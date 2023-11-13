import React from 'react';
import Headphone from '../Headphone/Headphone';

const Device = (props) => {
    console.log(props);
    return (
        <div>
            <h5>Laptop Name:{props.laptop} And price: {props.price} And Model:{props.model}</h5>
            <p>Mobile Name:{props.mobile} And price:{props.price}And Model:{props.model}</p>
            <Headphone headphone='havit' price='21000' model='kl12362ml'></Headphone>
        </div>
    );
};

export default Device;