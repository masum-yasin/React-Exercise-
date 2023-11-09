import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
const friend = useLoaderData();

console.log(friend);
    return (
        <div>
           <h4>Everything about this person here</h4> 
           <>
            <h1>Name:{friend.name}</h1>
            <p>Email:{friend.email}</p>
            <p>Phone:{friend.phone}</p>
            <h4>Website:{friend.website}</h4>
           </>
        </div>
    );
};

export default FriendDetails;