import Image from 'next/image'
import React from 'react'
import Moment from 'react-moment';
import PostFooter from './PostFooter';

const Post = ({ name, message, email, timestamp, image, postImage }) => {
    return (
        <div className='flex flex-col gap-2 rounded-t-xl bg-white my-2 shadow'>
            <div className='flex space-x-2 items-center p-3'>
                <div><Image src={image} width={40} height={40} alt="" className='rounded-full' /></div>
                <div className='flex flex-col'>
                    <p className='text-sm font-bold '>{name}</p>
                    <p className='text-xs font-medium text-gray-500'>
                        <Moment interval={30000} fromNow>{timestamp?.toDate().toLocaleString()}</Moment>
                    </p>
                </div>
            </div>
            <div className='text-sm px-3'>{message}</div>
            {postImage && (<div className='relative h-56 md:h-96 bg-white'>
                <Image src={postImage} alt="" style={{ objectFit: 'cover' }} fill />
            </div>)}
            <div className='rounded-b-xl'><PostFooter /></div>
        </div>)
}

export default Post