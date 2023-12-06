import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h4>Friend</h4>
            {ring && <p><small style={{backgroundColor:'blue', color:'white', fontSize:'30px'}}>I gift you a Diamod if you are me</small></p>}
        </div>
    );
};

export default Friend;