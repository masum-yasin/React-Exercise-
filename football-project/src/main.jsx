import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Component/About/About.jsx';

import Home from './Component/Home/Home.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Playerlist from './Component/Playerlist/Playerlist.jsx';
import Player from './Component/Player/Player.jsx';
import Womenplayer from './Component/Womenplayer/Womenplayer.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/playerlist',
        element:<Playerlist></Playerlist>
      },
      {
        path:'player',
        element:<Player></Player>
      },
      {
        path:'womenplayer',
        element:<Womenplayer></Womenplayer>
      }
      

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
