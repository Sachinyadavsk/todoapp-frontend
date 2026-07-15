import React from 'react'
import Footer from '../components/Footer'

const Desclaimer = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-10 px-8'>
        <h1 className='text-3xl font-bold'>General Disclaimer</h1>
        <ul className='mt-10 text-justify border-l-8 border-gray-400 gap-10 px-5  hover:bg-gray-200 hover:rounded-lg hover:py-8'>
          <li className='text-lg text-gray-500'><span className='text-3xl font-semibold'>T</span>he TodoApp is provided for personal and professional task management purposes only. While we strive to ensure the
            accuracy and reliability of the application, we do not guarantee that it will always be error-free, uninterrupted, or
            suitable for every user's specific needs.</li>
          <li className='text-lg text-gray-500'>Users are responsible for maintaining backups of important tasks and data. TodoApp shall not be held liable for any loss
            of data, missed deadlines, or damages resulting from the use or inability to use the application.</li>
          <li className='text-lg text-gray-500'>By using TodoApp, you acknowledge and agree that the application is provided "as is" without warranties of any kind,
            either express or implied. Continued use of the application constitutes acceptance of this disclaimer and any future updates to it</li>
        </ul>

         <ul className='mt-10 text-justify border-r-8 border-gray-500 gap-10 px-5 hover:bg-gray-200 hover:rounded-2xl hover:py-8'>
          <li className='text-lg text-gray-500'>The TodoApp is provided for personal and professional task management purposes only. While we strive to ensure the
            accuracy and reliability of the application, we do not guarantee that it will always be error-free, uninterrupted, or
            suitable for every user's specific needs.</li>
          <li className='text-lg text-gray-500'>Users are responsible for maintaining backups of important tasks and data. TodoApp shall not be held liable for any loss
            of data, missed deadlines, or damages resulting from the use or inability to use the application.</li>
          <li className='text-lg text-gray-500'>By using TodoApp, you acknowledge and agree that the application is provided "as is" without warranties of any kind,
            either express or implied. Continued use of the application constitutes acceptance of this disclaimer and any future updates to it</li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Desclaimer
