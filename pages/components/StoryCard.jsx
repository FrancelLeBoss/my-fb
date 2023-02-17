import Image from 'next/image'
import React from 'react'

const StoryCard = ({ src, name, profile }) => {
    return (
        <div className='relative h-14 w-14 md:h-40 md:w-[5.5rem] cursor-pointer 
        hover:scale-105 hover:animate-pulse transform ease-in'>
            <Image src={profile}
                className="absolute hidden md:inline-flex z-50 left-2 top-1 rounded-full border-4 border-blue-700"
                width={40}
                height={40} alt={name}
            />
            <Image src={src} alt={name} className="object-cover filter brightness-75 rounded-full md:rounded-xl lg:h-full h-auto w-full border-2 border-blue-600 md:border-none"
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
            <p className='absolute bottom-1 left-0 text-white text-xs px-1 opacity-0 lg:opacity-100 truncate font-semibold'>{name}</p>
        </div>
    )
}

export default StoryCard