import React from 'react';
import { multiply,add } from '../Utilities';

const Shoes = () => {
    const first = 20;
    const second = 30;
    const price = multiply(first,second)
    const sum =add(first,second)
    return (
        <div>
            <h4>Here is shoes Price:{price}</h4>
            <p>Cosmetic Price:{sum}  </p>
        </div>
    );
};

export default Shoes;