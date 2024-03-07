"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react"
function page() {
    const { data: session} = useSession()
    console.log(session);
    return (
        <div>
        <div>page</div>
        {session && <span className='justify-center text-4xl'>{session.user?.name || session.user?.username}</span>}
        <button className='bg-blue-500 rounded m-3 p-2' onClick={()=>signOut()}>Logout</button>
        </div>
    )
}

export default page