import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App'
import Countries from '../Countries/Countries'
import Countac from '../Countac/Countac'
import About from '../About/About'

export default function Main() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}>
    <Route index element={<Countries/>}></Route>
    <Route path='/contact' element={<Countac/>}></Route>
    <Route path='about'element={<About/>}></Route>
    </Route>
   </Routes>
</BrowserRouter>
  )
}
