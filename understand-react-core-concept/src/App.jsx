import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './Component/Device/Device'
import Steps from './Component/Steps/Steps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Device laptop='Lenevo' price='55000' model='mk1236541po'made='China'></Device>
    <Device mobile='i-phone' price='110000' model='kl36251pl' made='Turkey' ></Device>
     <Steps></Steps>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
