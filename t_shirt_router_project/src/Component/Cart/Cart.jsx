import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
          <h4>Order Summary:{cart.length}</h4>
          {
            cart.map(tshirt =><p key={tshirt._id}>{tshirt.name}
            <button onClick={()=>handleRemoveFormCart(tshirt._id)}>Remove Item</button>
            </p>)
          }
        </div>
    );
};

export default Cart;