"use client"
// import { link } from 'fs';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from 'next-auth/react';
function page() {
    const register = async() => {
        try {
            const reg = await axios.post("/api/users/register",{
                username: name,
                email: email,
                password: pass,
            })
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    return (
        <div className='mt-8 flex flex-col justify-center items-center content-center'>
        <p className='text-3xl m-2'>Register</p>
        <input type="text" value={name} className='m-2 rounded h-8 text-black' placeholder='name' onChange={(e)=>setname(e.target.value)}/>
        <input type="text" value={email} className='m-2 rounded h-8 text-black' placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" value={pass} className='m-2 rounded h-8 text-black' placeholder='password' onChange={(e)=>setpass(e.target.value)}/>
        <button className='bg-blue-500 rounded m-3 p-2' onClick={register}>Register User</button>
        <button className='bg-gray-500 rounded m-3 p-2' onClick={()=>signIn("google")}>Signin with Google</button>

        <Link href="/login"><p className='text-blue-300'>Login</p></Link>
        </div>
    )
}

export default page