import React, { useEffect, useState } from 'react';
import PriceCard from '../PricesCard/PriceCard';

const PriceList = () => {
    const [prices,setPrices]= useState([]);

    useEffect(()=>{
        fetch('Prices.json')
        .then(res =>res.json())
        .then(data =>setPrices(data))
        
    },[])
   
    return (
        <div className='mx-12 flex flex-col'>
           <h1 className='text-5xl text-center text-purple-950 bg-purple-300 mt-6'>Awesome Affordable Prices</h1> 
          <div className='grid md:grid-cols-3 gap-4'>
          {
            prices.map(price =><PriceCard key={price.id}price={price}></PriceCard>)
           }
          </div>
        </div>
    );
};

export default PriceList;