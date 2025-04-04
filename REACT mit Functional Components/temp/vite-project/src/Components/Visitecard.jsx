

export default function Visitecard({ name, jobTitel }) {
    return (
        <div className='max-w-xs rounded-lg overflow-hidden shadow-lg bg-white'>
            <img className='w-full h-40 object-cover'
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt={name}
            />
            <div className='p-4 text-center'>
                <h2 className='font-bold text-lg'>{name}</h2>
                <p className='text-gray-600'>{jobTitel}</p>
            </div>
        </div>

    );
}