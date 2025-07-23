 "use client"

import React from 'react';
import { AskBot,FormState } from "@/actions/action"
import { useActionState } from "react"


export default function Home() {

   const initialState :FormState ={
    error:{},
  }
 
  const [state,formAction,isPending] = useActionState(AskBot,initialState)

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">


<div className='h-fit w-fit  md:w-[600px] flex flex-col justify-start items-center mt-5'>
      
      <form className='flex flex-col  gap-4 p-4 bg-white rounded-lg shadow-2xl'action={formAction}>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px] mb-3'
          
        >
          {state?.error.name && <p className="text-red-500">{state.error.name}</p>}
          <label className='text-black text-sm font-bold capitalize'>
            Your Name
          </label>
          <input 
           placeholder="Your Name"
            type='text'
            name='name'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px] mb-3'
          
        >
          {state?.error.email && <p className="text-red-500">{state.error.email}</p>}
          <label className='text-black text-sm font-bold capitalize'>
            Your Email 
          </label>
          <input
           placeholder="Email"
            type="text"
            name="email"
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px] mb-3'
          
        >
          {state?.error.location && <p className="text-red-500">{state.error.location}</p>}
          <label className='text-black text-sm font-bold capitalize'>
            Location
          </label>
          <input
          placeholder="Location"
            type="text"
            name="location"
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        
        <div
          className='flex justify-start mt-4 cursor-pointer'
          
        >
          <button
            className='capitalize cursor-pointer md:w-[400px] bg-blue-500 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out disabled:bg-blue-200'
            disabled={isPending}
          >
            Add Location
          </button>
        </div>
      </form>
    </div>

    </div>
  );
}
