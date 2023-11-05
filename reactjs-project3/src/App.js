import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
     <ExternalUser></ExternalUser>
     
    </div>
  );
  function ExternalUser(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data => setUsers(data))
    }
    , []);
    return(
      <div>
        <h1>Exertermal Users</h1>
        <p>{users.length}</p>
        {
          users.map(user => <User name={user.name} email={user.email} address={user.username} ></User>)
        }
      </div>
    )
  }
  function User(props){
    return(
      <div>
        <h1>Name:{props.name}</h1>
        <p>Email:{props.email}</p>
        <h4>Username:{props.username}</h4>
      </div>
    )
    }
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
