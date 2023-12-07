import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children,hasFriend,ring}) => {
    const moneyStore = useContext(MoneyContext)
    return (
        <div>
            <h4>Cousin</h4>
            <p><span>{children}</span></p>
            { hasFriend && <Friend ring={ring}></Friend>}
            <p><small>Money:{moneyStore}</small></p>
        </div>
    );
};

export default Cousin;