import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signUp, setSignUp] = useState(false)

  const changeForm = () => {
    setSignUp(!signUp)
  }

  return (
    <div>
      <img className="absolute h-full w-full" src='https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_medium.jpg' alt='Netflix Bg'/>
      <Header />
      <div className="relative flex items-center justify-center mt-20">
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md mx-auto mt-4">
          <h2 className="text-white text-2xl font-bold mb-6">{!signUp ? 'Sign In': 'Sign Up'}</h2>
          <form>
            {
              signUp && (
                <input
                  type='name'
                  placeholder='Full Name'
                  className='w-full h-12 rounded-md bg-gray-800 border border-gray-700 p-4 mb-4 text-white'
              />
              )
            }
            <input
              type='email'
              placeholder='Email'
              className='w-full h-12 rounded-md bg-gray-800 border border-gray-700 p-4 mb-4 text-white'
            />
            <input
              type='password'
              placeholder='Password'
              className='w-full h-12 rounded-md bg-gray-800 border border-gray-700 p-4 mb-4 text-white'
            />
            <button className='w-full h-12 rounded-md bg-red-600 text-white font-bold mb-4'>
              {!signUp ? 'Sign In' : 'Sign Up'}
            </button>
            <div className='text-gray-400 text-sm'>
              { !signUp ? 'New to Netflix?' : 'Already a user?'} <span className='text-white hover:underline cursor-pointer' onClick={changeForm}> {!signUp ? 'Sign Up Now': 'Sign In Now'}</span>
            </div>
          </form>
        </div>
        </div>
        </div>
  )
}

export default Login
