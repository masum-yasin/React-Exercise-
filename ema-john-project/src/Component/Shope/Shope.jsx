import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shope = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] =useState([]);
    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[]);
    useEffect(()=>{
        const storeData  = getShoppingCart();
        console.log(storeData);
    },[])
    const handleToAddCart = (product)=>{
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id)
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =><Product key={product.id} product={product} handleToAddCart={handleToAddCart}></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shope;