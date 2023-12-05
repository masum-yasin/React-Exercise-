import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast  from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddtoCart = (shirt)=>{
        const exists = cart.find(ts =>ts._id===shirt._id)
        if(exists){
            toast("you have already added this t_shirt")
        }
        else{
            const newCart = [...cart,shirt];
        setCart(newCart)
        }
        
    };
    const handleRemoveFormCart = (id)=>{
        const remaining = cart.filter(ts =>ts._id !==id);
        setCart(remaining);
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