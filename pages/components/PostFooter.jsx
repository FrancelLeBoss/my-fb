import { ChatBubbleBottomCenterIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/outline'
//import { ChatBubbleBottomCenterIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/solid'
import React from 'react'

const PostFooter = () => {
    return (
        <div className='flex flex-col'>
            <div className='pb-2 border-b-2 lg:px-3 px-2 flex justify-between'>
                <div className='flex items-center space-x-1'><HandThumbUpIcon className='w-5 text-blue-600' /><span className='text-xs lg:text-sm'>1K</span></div>
                <div className='flex items-center space-x-1'><ChatBubbleBottomCenterIcon className='w-4 text-blue-600' /><span className='text-xs lg:text-sm'>100</span><ShareIcon className='w-4' /><span className='text-xs lg:text-sm'>20</span></div>
            </div>
            <div className='flex justify-between items-center text-gray-500 cursor-pointer lg:px-10 md:px-8 px-6 my-3 font-semibold'>
                <div className='flex items-center space-x-1'><HandThumbUpIcon className='w-5' /><span className='text-sm lg:text-base'>Like</span></div>
                <div className='flex items-center space-x-1'><ChatBubbleBottomCenterIcon className='w-5' /><span className='text-sm lg:text-base'>Comment</span></div>
                <div className='flex items-center space-x-1'><ShareIcon className='w-5' /><span className='text-sm lg:text-base'>Share</span></div>
            </div>
        </div>
    )
}

export default PostFooter