import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from './components/Feed'
import Header from "./components/Header"
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'
import { db } from '../firebase.js'
export default function Home({ session, posts }) {
  if (!session) return <Login />
  return (
    <div className='bg-gray-100 h-screen overflow-hidden'>
      <Head>
        <title>Facebook 2.0</title>
      </Head>
      <Header session={session} />
      <main className='flex justify-between'>
        <div><Sidebar /></div>
        <div><Feed posts={posts} /></div>
        <div className='flex'><Widgets /></div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get()
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      posts: docs
    }
  }
}