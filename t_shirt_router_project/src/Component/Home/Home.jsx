import React from 'react';
import {useLoaderData} from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts);
    return (
        <div className='home-container'>
           <div className='t-shirt-container'>
           {
             tshirts.map(tshirt =><TShirt key={tshirt._id} tshirt={tshirt}></TShirt>)
            }
           </div>
           <div className='cart-container'>
            <h4>Order Summary</h4>
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;