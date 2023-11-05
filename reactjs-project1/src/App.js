import logo from './logo.svg';
import './App.css';
import image1 from './image/images (1).jpg' ;
import image2 from './image/download.jpg'

function App() {
  const objects = [
    {name:"lenevo", price:60000, model:'xl10235ml' },
    {name:"Walton", price:210000,model:'xl10235ml'},
    {name:"Apple", price:210000,model:'xl10235ml'},
  ]
  return (
    <div className="App">
      {
        objects.map(Object => <Product name={Object.name} price={Object.price}model={Object.model}></Product>)
      }
      {/* <Product name="Lenevo" price="42500"></Product> */}
    </div>
  );
}
function Product(props){
  return (
   <div className='productDetails'>
    <h1>Product Name:{props.name}</h1>
   <img src={image1} alt="" />
   <img src={image2} alt="" />
    <p>Price:{props.price}</p>
    <p>Price:{props.model}</p>
   </div>
  )
}

export default App;
