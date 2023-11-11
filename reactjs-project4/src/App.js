
import { Outlet } from 'react-router-dom';
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
  <Outlet></Outlet>
   <Footer></Footer>
    </div>
  );
}

export default App;
