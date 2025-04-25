import React from 'react'

export default function PeopleCard({ name, title, imageuri }) {
    return (
        <div className='border'>
            <div>
                <h2>{name}</h2>
                <h4>{titel}</h4>
            </div>
            <div>
                <img src={imageUri} alt="" />
            </div>

        </div>
    )
}
