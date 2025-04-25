import React, { useState } from 'react'
import Cards from './Components/Cards';
import List from './Components/list';
import Button from './Components/Button';
import Visitecard from './Components/Visitecard';
import PeopleContainer from './Components/PeopleContainer';

type Props = {}

export default function App1({ }: Props) {

    const [count, setCount] = useState(0)
    const [drinks] = useState(["Coffe", "Tea", "Beer",]);
    const handleClick = () => {
        alert("Button wurde geklickt!");
    };


    return (
        <>
            <h1 className='bg-amber-300'>Hello</h1>
            <Cards />
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