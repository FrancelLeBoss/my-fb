import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { db, storage } from '../../firebase.js'
import firebase from 'firebase/compat/app'
//import { useEffect } from 'react'

const InputBox = ({ session }) => {
    //const { data: session } = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)
    const sendPost = (e) => {
        // I'm using nativeEvent instead of react's event(e), i don't know why it didn't want to work
        e.nativeEvent.preventDefault()
        // e.preventDefault()
        if (!inputRef.current.value) return;
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                //const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url', {contentType:'image/jpg'})
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url', { contentType: 'image/jpg' })
                removeImage()
                uploadTask.on('state_change',
                    (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Progression : ' + progress + '%');
                    },
                    error => {
                        console.error(error)
                    },
                    () => {
                        //when the upload completes
                        storage.ref(`posts`).child(doc.id).getDownloadURL().then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            }, { merge: true })
                        })
                    })
            }
        })
        inputRef.current.value = ""

    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }
    // useEffect(() => {
    //     console.log(session?.user)
    // }, [])

    return (
        <div className='p-3 mx-auto flex flex-col gap-2 bg-white rounded-xl'>
            <div className='flex gap-2 border-b'>
                <form className='flex-1 flex gap-1 text-sm font-semibold text-blue-500 pb-3 pt-2
                      border-b items-center'>
                    <Image src={session?.user?.image} className="rounded-full"
                        width={40} height={40} alt={session?.user?.name} />
                    <input type="text" className='items-center flex-grow bg-gray-100 outline-none px-2 py-3 
                    placeholder-gray-500 rounded-3xl' ref={inputRef}
                        placeholder={`What's up, ${session?.user?.name} ?`} />
                    <input type="submit" className='hidden' value={"Publish"} onClick={sendPost} />
                    {imageToPost && (<div className='flex flex-col filter hover:brightness-110
                     transition duration-150 transform hover:scale-105 cursor-pointer' onClick={removeImage}>
                        <Image className='h-10 max-w-8 rounded-md object-contain' src={imageToPost} alt="" />
                        <p className='text-xs text-red-500 text-center'>remove</p>
                    </div>)}
                </form>
            </div>
            <div className='flex justify-between space-x-3 font-semibold py-1'>
                <div className='flex gap-1 hover:bg-gray-200 cursor-pointer rounded-md p-2 text-gray-600 lg:text-base md:text-sm text-xs items-center justify-center'><VideoCameraIcon className='lg:h-6 md:h-5 h-4 text-red-600' /> <span>Live Video</span></div>
                <div onClick={() => filePickerRef.current.click()} className='flex gap-1 hover:bg-gray-200 cursor-pointer
                 rounded-md p-2 text-gray-600 lg:text-base md:text-sm text-xs
                 items-center justify-center'>
                    <PhotoIcon className='lg:h-6 md:h-5 h-4 text-green-600' />
                    <span>Photos / Videos</span>
                    <input type="file" onChange={addImageToPost} ref={filePickerRef} hidden />
                </div>
                <div className='flex gap-1 hover:bg-gray-200 cursor-pointer rounded-md p-2 text-gray-600 lg:text-base md:text-sm text-xs items-center justify-center'><FaceSmileIcon className='lg:h-6 md:h-5 h-4 text-yellow-500' /> <span>Feeling / Activity</span></div>
            </div>
        </div>
    )
}

export default InputBox