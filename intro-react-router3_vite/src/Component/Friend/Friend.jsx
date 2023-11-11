import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id,name,email} = friend;
    return (
        <div>
           
            <div className='friend'>
                <h3>ID:{id}</h3>
        <h5>Name:{name}</h5>
        <p>Email:{email}</p>
        <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        
            </div>
        </div>
    );
};

export default Friend;