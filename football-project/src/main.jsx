import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'


import About from './Component/About/About.jsx';
import { RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
