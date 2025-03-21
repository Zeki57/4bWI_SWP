import React from 'react'

export default function list({ items }) {
    return (
        <div>
            {items.map((items, index) => (
                <div key={index} className='border border-green-500 my-2 p-2 bg-green-100 w-48 mx-auto'>
                    {items}
                </div>
            ))}
        </div>
    )
}
