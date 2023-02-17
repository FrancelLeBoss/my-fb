import { BookOpenIcon } from '@heroicons/react/24/solid'
import React from 'react'
import StoryCard from './StoryCard'

const stories = [
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
const Stories = () => {
    return (
        <div className='p-3 mx-auto flex flex-col gap-2'>
            <div className='flex gap-2 border-b'>
                <div className='flex-1 flex justify-center gap-1 lg:text-xl md:text-base text-sm font-semibold text-blue-500 pb-3 pt-2 border-b-4 border-b-blue-600 items-center'><BookOpenIcon className='lg:h-6 md:h-5 h-4' /><span>Stories</span></div>
                <div className='flex-1 flex justify-center gap-1 lg:text-xl md:text-base text-sm font-semibold text-gray-500 pb-3 pt-2 items-center'><BookOpenIcon className='lg:h-6 md:h-5 h-4' /><span>Reals</span></div>
            </div>
            <div className='flex justify-center space-x-3 '>
                {stories.map(story => (<StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />))}
            </div>
        </div>
    )
}

export default Stories