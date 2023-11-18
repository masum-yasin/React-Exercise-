
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const cart = props.cart
    const {cart} = props
    return (
        <div className='cart-container'>
           <h2>Order Summary</h2>
                <p>Select Item:{cart.length}</p>
                <p>Total Price:</p>
                <p>Total Shipping:</p>
                <p>Tax:</p>
                <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;