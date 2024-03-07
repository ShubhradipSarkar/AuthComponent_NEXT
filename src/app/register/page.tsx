"use client"
// import { link } from 'fs';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

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
        <div className='mt-8 flex flex-col justify-center items-center content-center '>
        <p className='text-3xl m-2'>Register</p>
        <input type="text" value={name} className='m-2 rounded h-8 text-black w-60' placeholder='name' onChange={(e)=>setname(e.target.value)}/>
        <input type="text" value={email} className='m-2 rounded h-8 text-black w-60' placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" value={pass} className='m-2 rounded h-8 text-black w-60' placeholder='password' onChange={(e)=>setpass(e.target.value)}/>
        <button className='bg-blue-500 rounded m-3 p-2 w-60' onClick={register}>Register User</button>
        <p className='m-3'>or sign in with</p>
        <div className='flex flex-row '>
        <button className='border border-white border-1 w-30 rounded p-2 m-1 flex flex-row' onClick={()=>signIn("google")}>
            {/* <p className='m-1'>Google</p> */}
            <Image
            src="/google1.png"
            alt="google"
            width={40}
            height={40}
            />
        </button>
        <button className='border border-white border-1 w-30 rounded p-2 m-1 flex flex-row ' onClick={()=>signIn("google")}>
            {/* <p className='m-1'>Facebook</p> */}
            <Image
            src="/facebook.png"
            alt="facebook"
            width={40}
            height={40}
            />
        </button>
        </div>
        <div className='flex flex-row pt-5'>
        <p className='text-white'>Already have an account? </p>

<Link href="/login"><p className='text-blue-300 m-1'>Login here</p></Link>

        </div>
        
        </div>
    )
}

export default page