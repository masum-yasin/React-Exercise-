import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
  
    return (
        <div className='bg-indigo-400 rounded-md mt-5 p-10'>
        <span>
        <h2 className='text-4xl font-bold text-orange-600 border-spacing-4'>{price.price}
        <span className='text-2xl font-bold text-white'>/mon</span></h2>
      
        </span>
         <h2 className='text-black-500 font-bold text-2xl'>{price.name}</h2>
         <p className='text-white font-bold underline'>Features:</p>
         {
            price.features.map((feature,indx) =><Features key={indx} feature={feature}></Features>)
         }
         <button className='w-full bg-yellow-700 py-1 text-white rounded-md mt-10 font-bold hover:bg-yellow-500'>Buy Now</button>
      
        </div>
    );
};

export default PriceCard;