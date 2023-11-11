import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Countries from './Component/Countries/Countries.jsx';
import Posts from './Component/Posts/Posts.jsx';
import Contact from './Component/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'countries',
        element:<Countries></Countries>,
        loader:()=> fetch("https://restcountries.com/v3.1/all")
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
