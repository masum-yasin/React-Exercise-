import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() =>{
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data =>setCountries(data))

    })
    console.log(countries);
    return (
        <>
            <h1 style={{color:'red'}}>Over All Country Information In The World</h1>
           <div  className='countries-container'>
           {
                countries.map(country => <Country country={country}key={country.ccas}></Country>)
            }
           </div>
           

        </>
    );
};

export default Countries;