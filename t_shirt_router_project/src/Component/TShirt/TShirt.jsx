import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt,handleAddtoCart}) => {
    const {name,price,picture,gender}=tshirt;
   
    return (
        <div className='t-shirt'>
            <img src= {picture} alt="" />
            <h1>{name}</h1>
            <p>Price:${price}</p>
            <p>Gender:{gender}</p>
            <button onClick={()=>handleAddtoCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;