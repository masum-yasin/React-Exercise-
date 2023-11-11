import React from 'react';
import	'./Friend.css';
import { Link } from 'react-router-dom';


const Friend = ({friend}) => {
    console.log(friend);
 const {name,email,phone,website,id}=friend;
    return (
        <div className='friend'>
        <h2>Name:{name}</h2>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>Website:{website}</p>
       <p><Link to={`/friend/${id}`}>Show The Result</Link></p>
        </div>
    );
};

export default Friend;