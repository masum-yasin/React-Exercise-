import React from 'react';
import './cosmetic.css'
import { addToDb, removeFromCartDb } from '../Fakedb';


const Cosmetic = (props) => {
    const {id,name,price} = props.cosmetic;
    const addToCart = (id)=>{
        addToDb(id)
    }
    const removeFromCart = (id)=>{
        removeFromCartDb(id)
    }
    // const addToCartWithParam = ()=> addToCart(id)
    return (
        <div className='product'>
           <h1>Buy this Cosmetic:{name}</h1> 
           <p>Price:{price}</p>
           <p><small>ID:{id}</small></p>
           <button onClick={()=>addToCart(id)}>Add to Cart</button>
           <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;