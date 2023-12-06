import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Component/Layout/MainLayout.jsx';
import Home from './Component/Home/Home.jsx';
import ReviewItem from './Component/ReviewItem/ReviewItem.jsx';
import Grandpa from './Component/Grandpa/Grandpa.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
        
      },
      {
        path:'review',
        element:<ReviewItem></ReviewItem>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
