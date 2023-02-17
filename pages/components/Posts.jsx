import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase.js'
import Post from './Post'

const Posts = ({ posts }) => {
    const [realTimePost] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )
    return <div>
        <div>
            {
                realTimePost ?
                    realTimePost?.docs.map(post => {
                        return <Post
                            key={post.id}
                            name={post.data().name}
                            message={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            image={post.data().image}
                            postImage={post.data()?.postImage || post.data().image}
                        />
                    })
                    :
                    posts.map(post => {
                        return <Post
                            key={post.id}
                            name={post.name}
                            message={post.message}
                            email={post.email}
                            timestamp={post.timestamp}
                            image={post.image}
                            postImage={post?.postImage || post.image}
                        />
                    })
            }
        </div>
    </div>
}

export default Posts