import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(60)
  const increseCount = ()=>setCount(count +1)
  const decreaseCount =()=> setCount(count -1);

  // const [count,setCount]=useState(60)
  // const increseCount = ()=>{
  //   const newCount =count +1;
  //   setCount(newCount);
  // }
  return (
    <div className="App">
     <Container></Container>
    </div>
  );
  function Container(){
    return (
      <div className='number-count'>
        <h1>Count:{count}</h1>
        <button onClick={increseCount}>Increase:</button>
        <button onClick={decreaseCount}>DecreaseCount</button>
      </div>
    )
  }
}

export default App;
