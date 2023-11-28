import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,seller,quantity,price} =props.product
    // console.log(props);
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>Name:{name}</h6>
          <p>Manufacturer:{seller}</p>
          <p>Price:{price}</p> 
          <p>Quantity:{quantity}</p>
        </div>
          <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;