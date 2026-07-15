import React from 'react'
import Footer from '../components/Footer'

const Policy = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-10 px-8'>
        <h1 className='text-3xl font-bold'>Privacy Policy</h1>
        <p className='text-xl text-gray-500 mt-5 border-l-4 px-4 hover:rounded-lg hover:bg-gray-100 hover:py-7'>Your privacy is important to us. This Privacy Policy explains how TodoApp collects, uses, stores, and protects your personal information when you use our application. By accessing or using TodoApp, you agree to the practices described in this Privacy Policy.</p>
        {/* Privacy Policy content layout */}
        <div className="mt-5">
          <h2 className='text-xl font-semibold'>Information We Collect</h2>
          <p className='text-lg text-gray-500 mt-4'>TodoApp may collect information that you voluntarily provide, such as your name, email address, profile information, and any tasks, notes, reminders, or other content you create within the application. We may also collect technical information, including your device type, operating system, browser type, IP address, and application usage statistics to improve performance and user experience.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-xl font-semibold'>How We Use Your Information</h2>
          <p className='text-lg text-gray-500 mt-4'>We use the information we collect to provide and maintain our services, manage your account, synchronize your tasks across supported devices, send important service notifications, improve application performance, enhance security, and respond to customer support requests. We may also use anonymous, aggregated data to understand user behavior and improve our features</p>
        </div>
        <div className="mt-5">
          <h2 className='text-xl font-semibold'>Data Storage and Security</h2>
          <p className='text-lg text-gray-500 mt-4'>We are committed to protecting your information through reasonable administrative, technical, and physical security measures. While we strive to safeguard your data, no internet transmission or electronic storage system can be guaranteed to be completely secure. Users are encouraged to maintain backups of important information.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-xl font-semibold'>Cookies and Similar Technologies</h2>
          <p className='text-lg text-gray-500 mt-4'>odoApp may use cookies, local storage, or similar technologies to remember your preferences, maintain login sessions, and improve application functionality. These technologies help us deliver a better and more personalized user experience. You can manage cookie settings through your browser, although disabling certain cookies may affect application functionality.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-xl font-semibold'>Contact Us</h2>
          <p className='text-lg text-gray-500 mt-4'>If you have any questions, concerns, or requests regarding this Privacy Policy or the way your information is handled, please contact our support team through the Contact Us section of TodoApp. We are committed to addressing your privacy concerns promptly and transparently.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Policy
