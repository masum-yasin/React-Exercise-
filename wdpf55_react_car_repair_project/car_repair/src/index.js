import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Service from './pages/Service';
import TechnicianTeam from './pages/TechnicianTeam';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
import ServiceDetails from './Components/ServiceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'booking',
      element:<Booking></Booking>
    },
    {
      path:'service',
      element:<Service></Service>,
      loader:() =>fetch("http://localhost:8080/serviceall")
      },
      {
        path:"service/:serviceId",
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=>fetch(`http://localhost:8080/service/${params.serviceId}`)
      },
    {
      path:'team',
      element:<TechnicianTeam></TechnicianTeam>
    },
    {
      path:'testimonial',
      element:<Testimonial></Testimonial>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    
    ]
  },
]);
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
