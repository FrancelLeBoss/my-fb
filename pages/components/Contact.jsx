import React from 'react'
import Image from 'next/image'

const Contact = ({ name, src }) => {
    return (
        <div className='flex items-center gap-2 rounded hover:bg-slate-200 relative'>
            <Image src={src} className="rounded-full" fi height={30} width={30}
                style={{ objectFit: 'cover', layout: 'fixed' }} alt="" />
            <p className='hidden lg:inline-flex font-medium p-2'>{name}</p>
            <div className='absolute bottom-1 left-6 bg-green-600 h-2 w-2 rounded-full animate-bounce'></div>
        </div>
    )
}

export default Contact