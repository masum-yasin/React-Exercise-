import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../Components/Singlepost/Singlepost';
import './Posts.css'

const Posts = () => {
    const postdata = useLoaderData();
    console.log(postdata);
    return (
        <div>
          <h1>These are post here:{postdata.length}</h1> 
         <div className='posts'>
         {
            postdata.map(post =><Singlepost key={post.id} post={post}></Singlepost>)
          } 
         </div>
        </div>
    );
};

export default Posts;