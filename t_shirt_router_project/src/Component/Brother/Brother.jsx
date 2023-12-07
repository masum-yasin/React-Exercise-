import React from 'react';
import { useContext } from 'react';
import { MoneyContext, ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const broring = useContext(ringContext)
    const getMoney = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
           <h3><span>Get Money:{getMoney}</span></h3> 
           <p><span style={{backgroundColor:'red'}}>This Diamond gift me:{broring}</span></p>
        </div>
    );
};

export default Brother;