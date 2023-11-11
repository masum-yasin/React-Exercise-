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
import FriendDetails from './Components/First_page/FriendDetails/FriendDetails.jsx';
import Posts from './Posts/Posts.jsx';
import PostDetail from './PostDetails/PostDetail.jsx';

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
      path:'post/:postId',
      element:<PostDetail></PostDetail>,
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
    {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch("https://jsonplaceholder.typicode.com/posts")
    },
   
    {
      path:'friend/:friendId',
      element:<FriendDetails></FriendDetails>,
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path:'friends',
      element:<Friends></Friends>,
      loader:() => fetch("https://jsonplaceholder.typicode.com/users")
    },
    {
      path:'contact',
      element:<Contact></Contact>,
     
    },
    {
      path:'*',
      element: <div>This is Wrong path</div>
    }
   
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
