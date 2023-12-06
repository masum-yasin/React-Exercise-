import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anty = ({ring}) => {
    return (
        <div>
            <h2>Anty</h2>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
                <Cousin>Khaybir</Cousin>
                
            </section>
        </div>
    );
};

export default Anty;