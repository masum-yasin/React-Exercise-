import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PriceList from './Component/PriceList/PriceList'
import Dashboard from './Component/Dashboard/Dashboard'
import PhoneBar from './Component/PhoneBar/PhoneBar'
import PieChartP from './Component/PieChart/PieChartP'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Navbar></Navbar>
<h1 className='text-7xl text-purple-600 text-center'>Hello From Tailwind</h1>
<PriceList></PriceList>
<Dashboard></Dashboard>
<PhoneBar></PhoneBar>
<PieChartP></PieChartP>

      
       
    </>
  )
}

export default App
