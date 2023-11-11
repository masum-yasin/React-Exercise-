import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postdata = useLoaderData();
    const {id,title,body}=postdata;

    
  
    return (
        <div>
            <h1>These are here Post Details of Id:{id}</h1>
            <p>Title:{title}</p>
            <p><small> Body:{body}</small></p>
        </div>
    );
};

export default PostDetail;