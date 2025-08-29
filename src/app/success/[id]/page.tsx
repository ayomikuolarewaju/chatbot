'use client'

import Link from "next/link";
import React, { useEffect, useState} from 'react';
import { getUser } from "@/actions/action";




const Success = ({ params }: { params: { id: string } })=>{
 

  const [userD,setUserD] = useState([])
  console.log(params.id)
  

 useEffect(()=>{
      const dt = getUser(params.id).then(res => res.json())
      .then(data => setUserD(data));
       console.log(dt)
},[params.id])

console.log(userD)

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