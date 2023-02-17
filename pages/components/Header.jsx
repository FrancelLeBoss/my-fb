import React from 'react'
import Image from "next/image"
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, TableCellsIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, FlagIcon, PlayIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'
import { signOut } from 'next-auth/react'

const Header = ({ session }) => {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-1 lg:px-5 shadow-md'>
            {/* Left */}
            <div className='flex items-center'>
                <Image src="https://links.papareact.com/5me"
                    width={40}
                    height={40} alt={"Facebook logo"} />
                <div className='flex ml-2 items-center rounded-full bg-gray-100'>
                    <MagnifyingGlassIcon className='h-6 text-gray-600 ' />
                    <input type="text" className='hidden md:inline-flex flex-shrink ml-2 items-center 
                    bg-transparent outline-none px-2 py-1 placeholder-gray-500'
                        placeholder='Search Facebook' />
                </div>
            </div>
            {/* Center */}
            <div className='flex justify-center flex-grow'>
                <div className=' flex text-gray-600 space-x-2 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} active={true} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* profile pic*/}
                <Image src={session.user.image}
                    onClick={signOut}
                    className="cursor-pointer rounded-full"
                    width={40}
                    height={40} alt={session.user.name} />
                <p className='whitespace-nowrap font-semibold pr-3 hidden md:inline-flex'>{session.user.name}</p>
                <TableCellsIcon className="icon" />
                <ChatBubbleOvalLeftEllipsisIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header