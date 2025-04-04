import React from 'react';

export default function Button({ text, onClick }) {
    return (
        <button className='bg-green-500" text-with px-6 py-2 rounded-md shadow-md hover:bg-green-600'
            onClick={onClick}>


            {text}
        </button>

    );
}