import React, { useEffect, useState } from 'react';

const Steps = () => {
    const [steps,setSteps] = useState(0);
  const increaseSteps = ()=>{
       const nextSteps = steps+1;
       setSteps(nextSteps)
  }
 useEffect ( ()=>{
    console.log(steps);
 },[steps])
    return (
        <div>
           <h3>This is my Smart Watch.....!</h3> 
           <p>Steps:{steps}</p>
           <button onClick={increaseSteps} >increament</button>
        </div>
    );
};

export default Steps;