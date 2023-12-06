import React from 'react';
import './Cart.css'


const Cart = ({cart,handleRemoveFormCart}) => {
  let message;
  if(cart.length ==0){
    message = <p className='blue'>You added a t-shirt</p>
  }
  else{
    message = <div>
      <h3 className='darkslategray'>Our Honorable Customer</h3>
      <span className='yellow'>Thanks you please wisting your money</span>
    </div>
  }
    return (
        <div>
          <h2 className={cart.length==1 ? 'red':'green'}>Order Summary:{cart.length}</h2>
           {cart.length>2 ? <span className='purple'>You are Allow Discount</span>:<span>No discount Allow</span>}
               <h3>{message}</h3>
          {
            cart.map(shirt =><p key={shirt._id}>{shirt.name}
            <button onClick={()=>handleRemoveFormCart(shirt._id)}>Remove Item</button>
            </p>)
          }
          {
            cart.length===2 && <h3>You are Paltenium Customer</h3>
          }
          <p className={`bold bordered ${cart.length===3 ? 'orange':'green'}`}></p>
        </div>
    );
};

export default Cart;
/* 
// CONDITIONAL RENDERING//
1. use if else to set a variable that will contain in element, components 
2. tarnary operator: conditional ? 'true':'false';
3. Logical &&: (if the condition is true then the next thing will be displayed)
*/
