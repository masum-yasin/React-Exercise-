import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
   const ring1 = useContext(ringContext)
    return (
        <div>
            <h5>Special</h5>
            <h4><span style={{backgroundColor:'yellow', color:'black'}}>Spical Gift for me:{ring1}</span></h4>
        </div>
    );
};

export default Special;