import React from 'react'
import Footer from '../components/Footer'
import { FaEnvelope, FaFacebook, FaFax, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-15 px-10'>
        <h2 className="text-4xl text-center font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Todo Supported Query</h2>
        <p className="mt-2 text-lg/8 text-center text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>

        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>

                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
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
                    By selecting this, you agree to our{' '}
                    <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="mt-25">
              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:info@todoapp.com"
                  className="hover:text-blue-600"
                >
                  info@todoapp.com
                </a>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3 mt-3">
                <FaFacebook />
                <a
                  href="https://facebook.com/todoapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Facebook
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 mt-3">
                <FaWhatsapp />
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className='mt-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1784263577946!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" />
            </div>
          </div>
        </div>


      </section>
      <Footer />
    </div>
  )
}

export default Contact
