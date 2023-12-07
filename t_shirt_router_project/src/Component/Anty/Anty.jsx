import React from 'react';
import Cousin from '../Cousin/Cousin';
import { useContext } from 'react';
import { ProgrammingContext } from '../Uncle/Uncle';

const Anty = ({ring}) => {
    const language = useContext(ProgrammingContext)
    return (
        <div>
            <h2>Anty</h2>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
                <Cousin><span>Khaybir</span> <h5>High Level Language:{language}</h5></Cousin>
               
                
            </section>
        </div>
    );
};

export default Anty;