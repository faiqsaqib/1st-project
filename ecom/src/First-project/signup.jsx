
import React from 'react';
import "./signup.css";


function SignUp() {
  return (
  <>
    


    <div className="main">
        <div className="right-main">
            <h2>Register Here.</h2>
            <div className="flex gap-5">
                <div className="mt-2">
                    <input id="email" name="email" type="text" autoComplete="email" placeholder="First Name*" required className="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                <div className="mt-2">
                    <input id="email" name="email" type="text" autoComplete="email" placeholder="Last Name*" required className="block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

            </div>
            
            
            <div className="mt-2">
                <input id="password" name="password" type="email" placeholder="Email*" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="mt-2">
                <input id="password" name="password" type="password" placeholder="New Password*" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="mt-2">
                <input id="email" name="email" type="text" autoComplete="email" placeholder="Phone No.*" required className="block w-full rounded-md border-0 py-1 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>
       
            <p>Or continue with...</p>
            
        </div>

    
    </div>
  </>
  )
}


export default SignUp;