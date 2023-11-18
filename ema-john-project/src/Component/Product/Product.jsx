import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
   const {img,name,price,seller,ratings} =props.product ;
   const handleToAddCart =props.handleToAddCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
         <div className='product-info'>
         <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
           <p className='masum'>Ratings: {ratings} start
           </p>
             </div>
         <button onClick={()=>handleToAddCart(props.product)} className='btn-cart'>
            Add to Cart 
            <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Product;