import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;
    const {cart} =props;
    // console.log(cart);
    let total = 0;
   let  Totalshipping =0;

    for(const product of cart){
        total = total + product.price;
        Totalshipping = Totalshipping + product.shipping;
    };
    const tax = total*7/100;
    const grandTotal = total+Totalshipping+tax
   
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Select Item:{cart.length}</p> 
            <p>Total Price:${total.toFixed(2)}</p>
            <p>Total Shipping Charge:{Totalshipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;