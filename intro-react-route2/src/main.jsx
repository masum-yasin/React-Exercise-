import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Component/Home/Home';
import Countries from './Component/Countries/Countries';

import App from './App';



import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Posts from './Component/Posts/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
 children:[
      {
        path:'/',
        element:<Countries></Countries>,
        loader:() => fetch("https://restcountries.com/v3.1/all")
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch("https://jsonplaceholder.typicode.com/posts")
      }
 ]
    
    
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
