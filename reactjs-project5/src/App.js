import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <TodoPost></TodoPost>
      <District name='samsung' laptop='asus'></District>
      <District name='sony' laptop='lenovo'></District>
      <District name='walton' laptop='mac'></District>
    </div>
  );
}
function TodoPost(){
  const [todolist,SetTodoList] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
   .then(res => res.json())
   .then(data => SetTodoList(data))
   
  },[])


  return(
    <div>
      <h1>These are here is Todo List:{todolist.length}</h1>
      <div>
        {
          todolist.map(todo=> <SingleTodolist id={todo.id} title={todo.title} complete={todo.completed} ></SingleTodolist> )
        }
      </div>
    </div>
  )
}
function SingleTodolist(props){
  return (
    <div style={{backgroundColor:'Black', color:'yellow',  textAlign:'center'}}>
      <h2>ID:{props.id}</h2>
      <h5>Title:{props.title}</h5>
      <p>{props.userId}</p>
      <h5>Completed:{props.complete}</h5>
    </div>
  )
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
