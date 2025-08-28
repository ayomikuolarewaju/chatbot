'use client'

import Link from "next/link";
import React, { useEffect} from 'react';

const Success = ()=>{

   

 useEffect(()=>{

     const fetchData = async ()=>{
        const answer = await fetch('https://almaroof.app.n8n.cloud/webhook/31d994cf-4cd0-447f-93f4-fbe98b629252',{
     method: 'GET',
     headers: {
    'Content-Type': 'application/json'
    }
  })
        if(!answer.ok){
          console.log('Failed to fetch data')
        }
        console.log('answer',answer)
        const dt = await answer.json()
        
        console.log('data',dt)
     }
        fetchData()
        
 },[])

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