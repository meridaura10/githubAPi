import React, { FC } from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from '../firebase';
const LoginPage: FC = () => {
  const login = () => {
    signInWithPopup(auth, provider).then((result) =>{
      if (result.user) {
        alert('you have successfully logged into the system')
      }
    }).catch((error) => {
      alert(`error login ${error.message}`)
    });
  }
  return (
    <div className='flex justify-center pt-5 mx-auto h-screen w-screen'>
      <div>
        <p className='font-bold text-lg text-center mb-2'>please register</p>
      <button onClick={login} className='px-4 bg-blue-500 rounded-[15px] text-white py-3'>
      sign in / sign up via github
      </button>
      </div>
    </div>
  )
}

export default LoginPage