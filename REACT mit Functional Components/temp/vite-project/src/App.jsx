import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import List from './Components/list'
import Visitecard from './Components/Visitecard'
import Button from './Components/button'
import PeopleContainer from './Components/PeopleContainer'


function App() {
  const [count, setCount] = useState(0)
  const [drinks] = useState(["Coffe", "Tea", "Beer",]);
  const handleClick = () => {
    alert("Button wurde geklickt!");
  };

  return (
    <>
      <h1 className='bg-amber-300'>Hello</h1>
      <div className="flex">
        <Card Name={"Zeki"} Jobtitel={"Student"} Description={"Clever"} />
        <Card Name={"David"} Jobtitel={"IT"} Description={"Cute"} />
      </div>
      <div className="drinks">
        <List items={drinks} />
      </div>
      <div className='my-4 text-center'>
        <Button text="Sender" onClick={handleClick} />
      </div>
      <div className='felx-jusify-center my-4'>
        <Visitecard name="Zeki Aksoy" jobTitel="Architect & Engineer"></Visitecard>
      </div>
      <div>
        <PeopleContainer />
      </div>

    </>
  )

}

export default App
