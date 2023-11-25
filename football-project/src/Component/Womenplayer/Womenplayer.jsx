import React from 'react';

const Womenplayer = (props) => {
    const {imageUrl}= props.womenplayer
    // console.log(props);
    return (
        <div>
            <img src={imageUrl} alt="" />
        </div>
    );
};

export default Womenplayer;