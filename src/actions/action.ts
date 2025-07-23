"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
// import { NextResponse } from 'next/server'

  export type FormState = {
  error: SubErrors
}
  export type SubErrors = {
    name?:string;
    email?:string;
    location?:string;
  }
 
 
 export async function AskBot(prevState:FormState,formdata:FormData){
    
    const name = formdata.get('name') as string
    const email = formdata.get('email') as string
    const location = formdata.get('location') as string

    const error:SubErrors ={}

    if(!name){
        error.name = "Name is required"
    }
    if(!email){
      error.email = "email is required"
  }
  if(!location){
      error.location = "location is required"
  }
    if(Object.keys(error).length > 0){
       return{error}
    }
  
   try {

     const res = await fetch('https://almaroof.app.n8n.cloud/webhook/31d994cf-4cd0-447f-93f4-fbe98b629252', {
     method: 'POST',
     headers: {
    'Content-Type': 'application/json'
    },
       body: JSON.stringify({ name, email, location })
    });

    if(!res.ok){
      const errorData = await res.json()
      return {error:errorData}
    }
    
   } catch (error) {
    console.error('Fetch error:', error);
   }
    console.log('Form submitted successfully');

    const cookieStore = await cookies()
    
    cookieStore.set('formSuccess', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 600, 
  })

     return redirect('/success')
  }