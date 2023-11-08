import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Project from './Components/Project/Project.jsx'


import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/project',
    element:<Project></Project>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
