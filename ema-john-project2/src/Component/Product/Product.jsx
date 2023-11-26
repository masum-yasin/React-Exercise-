import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,seller,qunatity,price} =props.product
    // console.log(props);
    return (
        <div className='product'>
          <img src={img} alt="" />
          <h4>Name:{name}</h4>
          <p>Seller:{seller}</p>
          <p>Price:{price}</p> 
          <p>Quantity:{qunatity}</p>
        </div>
    );
};

export default Product;