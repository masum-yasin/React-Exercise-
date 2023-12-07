import React, { createContext } from 'react';
import Cousin from '../Cousin/Cousin';
export const ProgrammingContext = createContext('Javascript')
const Uncle = () => {
    return (
        <div>
            <ProgrammingContext.Provider value='Javascript is a High Level Language'>

            </ProgrammingContext.Provider>
           <h1>Uncle</h1> 
          <section className='flex'>
          <Cousin>Tasmia</Cousin>
           <Cousin>Nilema</Cousin>
          </section>
        </div>
    );
};

export default Uncle;