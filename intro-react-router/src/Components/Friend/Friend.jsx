import React from 'react';
import	'./Friend.css';


const Friend = ({friend}) => {
    console.log(friend);
 const {name,email,phone,website}=friend;
    return (
        <div className='friend'>
        <h2>Name:{name}</h2>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>Website:{website}</p>

        </div>
    );
};

export default Friend;