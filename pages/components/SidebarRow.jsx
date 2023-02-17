import React from 'react'
import Image from "next/image"

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className='flex items-center gap-1 py-2 px-1 rounded hover:bg-gray-200'>
            {src && (<Image
                className='rounded-full'
                src={src}
                width={30}
                height={30}
                alt=""
            />)
            }
            {Icon && (<Icon className="h-8 w-8 text-blue-500" />)}
            <p className='hidden md:inline-flex text-sm font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow