'use client'

import Link from "next/link";
import React, { useEffect} from 'react';
import {prisma} from "@/actions/db";
import {useRouter}  from "next/navigation"

const Success = ()=>{
 
  const query = useRouter();

  console.log(query)

 useEffect(()=>{

     const fetchData = async ()=>{
        const answer = await prisma.user.findOne({
          where: { name: query },
        })
        if(!answer.ok){
          console.log('Failed to fetch data')
        }
        console.log(answer)
        const dt = await answer.json()
        
        console.log(dt)
     }
        fetchData()
        
 },[query])

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
            <p className="text-gray-700 mb-6">Your form has been successfully submitted.</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <Link href="/" className="text-blue-500 hover:underline">Go back to home</Link>
            </div>
          </div>
        </div>
    )
}

export default Success;