import React from 'react';
import './Single.css';
import { Link } from 'react-router-dom';

const Singlepost = ({post}) => {
    const {id,title,body} = post;
    return (
        < >
            <div className='posttype'>
            <h1>ID:{id}</h1>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <p><Link to={`/post/${id}`}>Post Details</Link></p>
            <button>Show Details</button>
           
            </div>
        </>
    );
};

export default Singlepost;