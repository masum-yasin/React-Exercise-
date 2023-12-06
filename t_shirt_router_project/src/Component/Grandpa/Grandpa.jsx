import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <section className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Anty ring={ring}></Anty>
            </section>
            
        </div>
    );
};

export default Grandpa;