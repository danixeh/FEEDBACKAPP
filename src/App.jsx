import React from 'react'
import { useState } from 'react'
import './App.css'
import LinkForm from './components/LinkForm'
import './index.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LinkForm />
      <h1></h1>



      
    </div>
  )
}

export default App
