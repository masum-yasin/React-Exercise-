import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import CoursesDetails from './Pages/CoursesDetails.jsx'
import Contacts from './Pages/Contacts.jsx'
const router = createBrowserRouter([
      {
        path:'/',
        element:<App></App>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'about',
            element:<About/>
          },
          
          {
            path:'coursedetails',
            element:<CoursesDetails></CoursesDetails>
          },
          {
            path:'course',
            element:<Courses></Courses>
          },
          {
            path:'contact',
            element:<Contacts></Contacts>
          }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
