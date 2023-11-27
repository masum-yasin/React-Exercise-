import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,seller,quantity,price} =props.product
    // console.log(props);
    return (
        <div className='product'>
          <img src={img} alt="" />
          <h6 className='product-name'>Name:{name}</h6>
          <p>Seller:{seller}</p>
          <p>Price:{price}</p> 
          <p>Quantity:{quantity}</p>
        </div>
    );
};

export default Product;