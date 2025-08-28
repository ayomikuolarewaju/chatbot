"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Groq from 'groq-sdk';

const client = new Groq({
  apiKey: process.env['GROQ_API_KEY'], // This is the default and can be omitted
});



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

    const client = new Groq({
      apiKey: process.env['GROQ_API_KEY'], // This is the default and can be omitted
   });

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

     const res = await client.chat.completions.create({
        messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
        model: 'llama3-8b-8192',
        });

         console.log(res.choices[0].message.content);
    
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