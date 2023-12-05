import React from 'react';


const Cart = ({cart,handleRemoveFormCart}) => {
  let message;
  if(cart.length ==0){
    message = <p>You added a t-shirt</p>
  }
  else{
    message = <div>
      <h3>Boroloxxxx</h3>
      <span>Thanks you please wisting your money</span>
    </div>
  }
    return (
        <div>
          <h4>Order Summary:{cart.length}</h4>
           {cart.length>2 ? <span>You are Allow Discount</span>:<span>No discount Allow</span>}
               <h3 style={{color:'red'}}>{message}</h3>
          {
            cart.map(shirt =><p key={shirt._id}>{shirt.name}
            <button onClick={()=>handleRemoveFormCart(shirt._id)}>Remove Item</button>
            </p>)
          }
        </div>
    );
};

export default Cart;
/* 
// CONDITIONAL RENDERING//
1. use if else to set a variable that will contain in element, components 
2. tarnary operator: conditional ? 'true':'false';
*/
