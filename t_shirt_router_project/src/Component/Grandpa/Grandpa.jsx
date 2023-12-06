import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <section className='flex'>
            <Father></Father>
            <Uncle></Uncle>
            <Anty></Anty>
            </section>
            
        </div>
    );
};

export default Grandpa;