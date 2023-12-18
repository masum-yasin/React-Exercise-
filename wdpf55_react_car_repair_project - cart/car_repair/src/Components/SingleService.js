import React, { useContext } from 'react';
import { ServiceContext } from './ServiceContext';


const SingleService = (props) => {
  console.log(props.data);
  const {id,product,model,price}=props.data;
  const{cartItems,addToCart}=useContext(ServiceContext)
  const cartItemCount = cartItems[id];

    return (
        <>
          <div class="col-lg-4 card">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{product} </h5>
                  <h5 class="card-title">{price} </h5>
                  <h5 class="card-title">{model} </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className='btn btn-warning w-100' onClick={()=>addToCart(id)}>Add to Cart({cartItemCount})</button>
                  {/* <a href="#" class="btn btn-primary bi bi-cart">
                   Add to cart
                  </a> */}
                </div>
              </div>  
        </>
    );
};

export default SingleService;