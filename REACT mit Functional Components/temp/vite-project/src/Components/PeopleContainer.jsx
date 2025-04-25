import React, { useEffect, useState } from 'react'
import Card from './Card'
import PeopleCard from './PeopleCard'

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://67b89a8c699a8a7baef4aa31.mockapi.io/Person").then(res => res.json().then(data => {
            setPeople(data);
        }));
    }, []);

    return (
        <div>
            <h1>People</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <PeopleCard name={person.name} title={person.jobtitle} imageUri={person.avatar} />
                })}
            </div>
        </div>

    )
} 
