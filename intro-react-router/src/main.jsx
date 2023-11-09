import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import First from './Components/First_page/First.jsx';
import Friends from './Components/Friends/Friends.jsx';
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'about',
//     element:<About></About>

//   },
//   {
//     path:'Contact',
//    element:<Contact></Contact>
//   }
// ])
const router = createBrowserRouter([
  {
    path:  '/',
    element:<Home></Home>,
  children:[
    {
      path:'/',
      element:<First></First>
    },
    {
      path:'about',
      element:<About></About>
    
    
    },
    {
      path:'friends',
      element:<Friends></Friends>,
      loader:() => fetch("https://jsonplaceholder.typicode.com/users")
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
   
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
 </>
)
