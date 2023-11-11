import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import ''


const Countries = () => {
    const countries=useLoaderData();
    console.log(countries);
   
    return (
        <div>
           
           <h1>All Country Here</h1>
           <div className='countries'>
            {
                countries.map(country => <Country key={country.id} country={country}></Country>)
            }
           </div>
          
        </div>
    );
};

export default Countries;