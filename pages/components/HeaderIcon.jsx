import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className='flex items-center rounded-xl cursor-pointer 
        md:hover:bg-slate-100 md:px-6 sm:h-14 active:border-b-2 
        active:border-blue-500 group'>
            <Icon className={`${active ? "text-blue-500" : "text-gray-500"} h-5 group-hover:text-blue-500
            text-center sm:h-7 mx-auto`} />
        </div>
    )
}

export default HeaderIcon