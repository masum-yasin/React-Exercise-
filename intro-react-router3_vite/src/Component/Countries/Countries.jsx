import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div >
            <h2>This All Country here:{countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country =><Country  key={country.id}country={country}></Country> )
                }
            </div>
        </div>
    );
};

export default Countries;