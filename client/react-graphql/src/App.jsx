import { useEffect, useState } from 'react'
import DatagasLogo from './assets/datagas.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <div>
        <a href="https://www.datagas.com.co/" target="_blank">
          <img src={DatagasLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Datagas Multiplier</h1>
    </div>
  )
}

export default App
