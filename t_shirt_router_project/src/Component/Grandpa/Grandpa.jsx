import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

export  const ringContext =createContext('gold')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money,setMoney] = useState(0)
   
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
         <MoneyContext.Provider value={[money,setMoney]}>
         <ringContext.Provider value='gold-ring'>
          <section className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Anty ring={ring}></Anty>
            </section>
          </ringContext.Provider>
         </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;
/* 
* 1.create context and export
* 2.create a provider and pass a value
* 3.use useContext and received the value

*/