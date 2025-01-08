import { signIn } from 'next-auth/react';
import React from 'react';
import { FcGoogle } from "react-icons/fc"

const Login = () => {
  return (
    <div className='bg-black min-h-screen grid place-items-center'>
        <button className='bg-white px-6 py-3 flex gap-2 items-center rounded-lg' onClick={() => signIn("google")}>
            <FcGoogle size={30} /> Sign In With Google
        </button>
    </div>
  )
}

export default Login;