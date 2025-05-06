import React from 'react'

export default function PeopleCard({ name, title, imageUri }) {
    return (
        <div className='border grid grid-cols-2 h-40'>
            <div className=' p-4'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <h4>{title}</h4>
            </div>
            <div className='bg-green-400 w-full border p-4 bg-green-600 '>
                <img src={imageUri} alt="" className='object-cover w-full h-full' />
            </div>

        </div>
    )
}
