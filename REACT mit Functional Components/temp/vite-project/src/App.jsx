import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-300'>Hello</h1>
      <div className="flex">
        <Card Name={"Zeki"} Jobtitel={"Student"} Description={"Clever"} />
        <Card Name={"David"} Jobtitel={"IT"} Description={"Cute"} />
      </div>
      test
    </>
  )

}

export default App
