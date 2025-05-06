import React, { useEffect, useState } from 'react'
import Card from './Card'
import PeopleCard from './PeopleCard'

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setfilteredPeople] = useState([]);

    useEffect(() => {
        fetch("https://67b89a8c699a8a7baef4aa31.mockapi.io/Person").then(res => res.json().then(data => {
            setPeople(data);
            setfilteredPeople(data);
        }));
    }, []);

    const filterpeople = (filter) => {
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
        setfilteredPeople(filtered);
    }

    return (

        <div className=''>


            <div className='fixed border mb-4 bg-white w-full h-28 p-8'>
                <input
                    className='border p-4'
                    type="text"
                    placeholder="Search"
                    onChange={(el) => {
                        console.log(el.target.value);
                        filterpeople(el.target.value);

                    }} />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
                {filteredPeople.map(person => {
                    return <PeopleCard name={person.name} title={person.jobtitle} imageUri={person.avatar} />
                })}
            </div>
        </div>

    )
} 
