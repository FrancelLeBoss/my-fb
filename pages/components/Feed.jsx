import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

const Feed = ({ posts, session }) => {
    return (
        <div className='h-screen pb-44 pt-0 mr-6 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl mt-4 my-2 lg:my-6 bg-white shadow-md rounded-xl'>
                <Stories />
            </div>
            {/**/}
            <div>
                <InputBox session={session} />
            </div>
            <div>
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed