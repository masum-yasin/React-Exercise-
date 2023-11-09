import React from 'react';
import './Single.css';

const Singlepost = ({post}) => {
    const {id,title,body} = post;
    return (
        < >
            <div className='posttype'>
            <h1>ID:{id}</h1>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            </div>
        </>
    );
};

export default Singlepost;