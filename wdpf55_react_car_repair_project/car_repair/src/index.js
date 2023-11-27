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
      element:<Service></Service>
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
    }
    ]
  },
]);
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
