
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

import Header from './Components/Header';
import ServiceContextProvider from './Components/ServiceContext';

function App() {
  return (
    <div className="App">
      <ServiceContextProvider>
        <Header/>
     <Outlet></Outlet>
     <Footer></Footer>
      </ServiceContextProvider>
    </div>
  );
}

export default App;
