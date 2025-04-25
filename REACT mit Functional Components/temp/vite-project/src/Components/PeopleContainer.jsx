import React, { useEffect } from 'react'
import Card from './Card'
import PeopleCard from './PeopleCard'

export default function PeopleContainer() {
    let people = [];

    useEffect(() => {
        fetch("https://67b89a8c699a8a7baef4aa31.mockapi.io/Person").then(res => res.json().then(data => {
            console.log(data);
            people = data;
        }));
    }, []);

    return (
        <div>
            <h1>People</h1>
            <div className='w-40'>
                <PeopleCard name="Zeki" title="ceo" imageUri="https://picsum.photos/200/300" />
                <PeopleCard name="Zeki" title="ceo" imageUri="https://picsum.photos/200/300" />
                <PeopleCard name="Zeki" title="ceo" imageUri="https://picsum.photos/200/300" />
            </div>
        </div>

    )
} 
