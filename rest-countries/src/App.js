
import './App.css';
import Countries from './Components/Countries/Countries';



function App() {
  return (
    <div className="App">
      
    <Countries></Countries>
  
  
    </div>
  );
  //   function LoadCountry(){
//     const [countries,setCountries] =useState([])
//     useEffect(()=>{
//       fetch('https://restcountries.com/v3.1/all')
//       .then(res =>res.json())
//       .then(data =>setCountries(data))
//     },[])
//     return (
//       <div>
//         <h1>Visiting Every Country of the World</h1>
//         <h3>Avilable:{countries.length}</h3>
//         {
//           countries.map(country =><Country name={country.name.common} population={country.population} ></Country>)
//         }
       
//       </div>
//     )
//   }
// }
// function Country(props){
//   return(
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h5>Population:{props.population}</h5>
//     </div>
//   )
}

export default App;
