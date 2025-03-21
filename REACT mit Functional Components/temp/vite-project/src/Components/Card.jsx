import React from 'react'

export default function Card({ Name, Jobtitel, Description }) {
    return (
        <div className='bg-orange-200 border w-full'>
            <p className='font-bold'>{Name}</p>
            <p>{Jobtitel}</p>
            <p>{Description}</p>
        </div>
    )
}
