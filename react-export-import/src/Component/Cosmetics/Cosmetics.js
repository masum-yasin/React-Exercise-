import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    // const cosmetics = [
    //     {id:1 , name:'makeup',price:200},
    //     {id:2 , name:'alta',price:600},
    //     {id:3 , name:'palish',price:800},
    //     {id:4 , name:'nilpalish',price:700},
    //     {id:5 , name:'balish',price:800}
    // ]
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setCosmetics(data))
    },[])
    
    
    return (
        <div>
            <h1>These are here All About Cosmetic Information</h1>
            <div>
                {
                    cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
                }
            </div>
           
        </div>
    );
};

export default Cosmetics;