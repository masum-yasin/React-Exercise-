import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name='samsung' laptop='asus'></District>
      <District name='sony' laptop='lenovo'></District>
      <District name='walton' laptop='mac'></District>
    </div>
  );
}
const districtStyle ={
  backgroundColor:'darkBlue',
  color:'white',
  borderRadious:'20px',
  margin:'40px'
}
function District(props){
  const [power,setPower] = useState(2);
  const boostPower = () =>{
     const newPower = power*2;
     setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h1>Monitor:{props.name}</h1>
      <p>Laptop:{props.laptop}</p>
      <p>Power:{power}</p>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
