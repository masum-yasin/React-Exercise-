import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddtoCart = (shirt)=>{
        const newCart = [...cart,shirt];
        setCart(newCart)
    };
    const handleRemoveFormCart =(id)=>{
        console.log(id);
    } 

   
    return (
        <div className='home-container'>
           <div className='t-shirt-container'>
           {
             tshirts.map(tshirt =><TShirt key={tshirt._id} tshirt={tshirt} handleAddtoCart={handleAddtoCart} ></TShirt>)
            }
           </div>
           <div className='cart-container'>
             <Cart cart={cart} handleRemoveFormCart={handleRemoveFormCart}> </Cart>
           </div>
        </div>
    );
};

export default Home;