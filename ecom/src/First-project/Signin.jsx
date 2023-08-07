import React from 'react';
import "./signup.css";


function SignIn() {
  return (
   <>
    <div className="main">
        
       
        <div className="right-main">
            <h2>Sign in</h2>
            <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter Email or Username" required className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="mt-2">
                <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            <p>Or continue with...</p>
            
        </div>

    
    </div>
   </>
  )
}


export default SignIn;