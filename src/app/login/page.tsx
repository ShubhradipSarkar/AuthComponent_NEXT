"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function page() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const router = useRouter();
  const loginuser = async() => {
    try {
      const res = await signIn("credentials",{
        email: email,
        password: pass,
        redirect: false
      })
      
      console.log(res);
      router.push("/home");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='mt-8 flex flex-col justify-center items-center content-center'>
      <p className='text-3xl m-2'>Login </p>
      <input type="text" className='m-2 rounded h-8 text-black' value={email} placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="text" className='m-2 rounded h-8 text-black' value={pass} placeholder='password' onChange={(e)=>setpass(e.target.value)}/>
      <button className='bg-blue-500 rounded m-3 p-2' onClick={loginuser}>Login User</button>
      <button className='bg-gray-500 rounded m-3 p-2' onClick={()=>signIn("google")}>Signin with Google</button>
      <Link href="/register"><p className='text-blue-300' >Register</p></Link>
    </div>
  )
}

export default page