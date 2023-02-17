import React from 'react'
import { VideoCameraIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Contact from './Contact'
const contacts = [
    {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Mark Zukerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]

const Widgets = () => {
    return (
        <div className='flex flex-col mt-4 lg:mt-6 gap-4 lg:gap-6 mr-2'>
            <div className='flex justify-between items-center text-gray-500 gap-8'>
                <span className='text-sm md:text-base lg:text-lg font-medium'>Contacts</span>
                <div className='hidden md:inline-flex items-center space-x-2'><VideoCameraIcon className='h-6 w-6 cursor-pointer hover:p-1 hover:bg-gray-200 hover:rounded-full' /><MagnifyingGlassIcon className='h-6 w-6 cursor-pointer hover:p-1 hover:bg-gray-200 hover:rounded-full' /><EllipsisHorizontalIcon className='h-6 w-6 cursor-pointer hover:p-1 hover:rounded-full hover:bg-gray-200' /></div>
            </div>
            <div className='flex flex-col space-y-2 relative'>
                {contacts.map(contact => {
                    return (<Contact src={contact.profile} name={contact.name} />)
                })}
            </div>
        </div>
    )
}

export default Widgets