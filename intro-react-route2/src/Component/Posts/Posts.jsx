import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Posts = () => {
 const postdata = useLoaderData();
 console.log(postdata);
    return (
        <div>
            <h2>These are all Post here</h2>
            {/* <div>
                {
                    postdata.map(post =><Post key={post.id} post={post}></Post>)
                }
            </div> */}
        </div>
    );
};

export default Posts;