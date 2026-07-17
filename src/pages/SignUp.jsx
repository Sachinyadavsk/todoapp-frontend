import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner_image.jpg'

const SignUp = () => {
  return (
    <div style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
      <section className='max-w-xl mx-auto py-6 px-8'>
        <div className="shadow-2xl py-5 px-10">
          <div className="flex text-center justify-center text-3xl font-semibold gap-2">
            <span className='text-green-500'><FaEdit /></span>
            <span><span>Todo</span><span className='text-green-500'>App</span></span>
          </div>
          <div className="text-center mt-4">
            <h1 className='text-2xl font-bold text-gray-600'>Create An Account</h1>
            <p className='text-xl text-gray-400 mt-2'>Login to your account to continue</p>
          </div>

          <form action="#" method="POST" className="mt-5">
            <div className="grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="text"
                    placeholder='Enter your full name'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='Enter your email'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    placeholder='Create your password'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    placeholder='Confirm your Password'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-green-600 transition-colors duration-200 ease-in-out has-checked:bg-green-600 has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                    <input
                      id="agree-to-policies"
                      name="agree-to-policies"
                      type="checkbox"
                      aria-label="Agree to policies"
                      className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                    />
                  </div>
                </div>
                <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
                  I agree to the {' '}
                  <Link to="/terms-conditions" className="font-semibold whitespace-nowrap text-green-600">
                    Term of Service
                  </Link> And {' '}
                  <Link to="/privacy-policy" className="font-semibold whitespace-nowrap text-green-600">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </section>

    </div>
  )
}

export default SignUp
