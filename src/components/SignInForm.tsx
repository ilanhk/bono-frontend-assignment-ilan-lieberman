'use client';

import { useState } from "react";
import SignIn from "@/utils/signIn-api";
import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';


export default function SignInForm (){
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');



  const submitHandler = async (e: React.FormEvent)=>{
    e.preventDefault();

    const data = { name, email };
    const result = await SignIn(data);
    console.log(result);

  };



  return (
      <form onSubmit={ submitHandler } className="signin-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />

      <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />

      <Button
        type="submit" 
        variant="contained" 
        size="large" 
        
        endIcon={<ArrowForward />}
        className='bg-black text-white font-bold px-8 py-2 rounded-full'
        >
          Save & Continue
      </Button>

      </form>

  );
};