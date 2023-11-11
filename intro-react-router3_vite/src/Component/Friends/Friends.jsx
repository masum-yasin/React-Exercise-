import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const userdata = useLoaderData();
  return (
        <div>
           <h4>These Friend List Here{userdata.length}</h4> 
          <div className='friends'>
          {
           userdata.map(friend=><Friend key={friend.id}friend={friend}></Friend>) 
        }
          </div>
         
        </div>
    );
};

export default Friends;