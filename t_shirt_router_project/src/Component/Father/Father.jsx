import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = ({ring}) => {
   const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Father :{money}</h2>
          <button onClick={()=>setMoney(money+1000)}>Increase Money</button>
            <Myself ring={ring}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            
        </div>
    );
};

export default Father;