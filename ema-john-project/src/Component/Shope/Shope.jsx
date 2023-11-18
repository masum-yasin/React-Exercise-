import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shope = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] =useState([]);
    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    const handleToAddCart = (product)=>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =><Product key={product.id} product={product} handleToAddCart={handleToAddCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Select Item:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shope;