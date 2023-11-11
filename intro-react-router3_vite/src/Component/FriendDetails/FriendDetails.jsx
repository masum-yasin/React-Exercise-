import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const postdata = useLoaderData();
    const {name,email,website,phone} = postdata;
    console.log(postdata);

    return (
        <div className='frienddetails'>
            <h1>Name:{name}</h1>
            <p>Email:{email}</p>
            <h3>Website:{website}</h3>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default FriendDetails;