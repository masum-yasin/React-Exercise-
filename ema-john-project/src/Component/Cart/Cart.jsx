
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const cart = props.cart
    // console.log(props);
    const {cart} = props;
console.log(cart);
    let Total = 0;
    let Totalshipping = 0;
    for(const product of cart){
        Total = Total+product.price;
        Totalshipping = Totalshipping + product.shipping
        // quantity = quantity+product.quantity
    }
    const tax = Total*7/100;
    const grandprice = Total + Totalshipping+tax;
    return (
        <div className='cart-container'>
           <h2>Order Summary</h2>
                <p>Select Item:{cart.length}</p>
                <p>Total Price:{Total.toFixed(2)}</p>
                <p>Shipping:{Totalshipping.toFixed(2)}</p>
                <p>Tax:{tax.toFixed(2)}</p>
             <h5>Grand Total:{grandprice}</h5>
        </div>
    );
};

export default Cart;