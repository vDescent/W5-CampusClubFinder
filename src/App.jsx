import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500'>Hello world</h1>
      <p className='text-green-500'>testing tailwind</p>
    </>
  )
}

export default App
