import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../Singlepost/Singlepost';
import './Posts.css'


const Posts = () => {
    const postdata = useLoaderData();
    console.log(postdata);
   
    return (
        <>
            <h4>All Post Here{postdata.length}</h4>
            <div className='posts'>
                {
                postdata.map(post=> <Singlepost key={post.id} post={post}></Singlepost>)
                }
            </div>
        </>
    );
};

export default Posts;