import React from 'react'
import Footer from '../components/Footer'

const TermConditions = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-15 px-8'>
        <h1 className='text-3xl font-bold'>Terms & Conditions</h1>
        <p className='text-xl text-gray-500 mt-5 border-l-4 px-5 hover:rounded-2xl hover:py-5'>Welcome to TodoApp. These Terms & Conditions govern your access to and use of our application and services. By creating an account, accessing, or using TodoApp, you agree to comply with these Terms. If you do not agree with any part of these Terms, please discontinue use of the application.</p>
        {/* Terms & Conditions content layouts */}
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>Acceptance of Terms</h2>
          <p className='text-lg text-gray-500 mt-5'>By using TodoApp, you confirm that you have read, understood, and accepted these Terms & Conditions. You agree to use the application only for lawful purposes and in a manner that does not violate the rights of others or interfere with the operation of the service.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>User Accounts</h2>
          <p className='text-lg text-gray-500 mt-5'>Certain features of TodoApp may require you to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update your information whenever necessary.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>Acceptable Use</h2>
          <p className='text-lg text-gray-500 mt-5'>TodoApp is intended to help users organize tasks, reminders, notes, and personal or professional activities. You agree not to use the application for illegal, fraudulent, harmful, abusive, or unauthorized purposes. You must not attempt to disrupt, damage, reverse engineer, or gain unauthorized access to the application, servers, or related systems.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>Service Availability</h2>
          <p className='text-lg text-gray-500 mt-5'>We strive to keep TodoApp available and functioning reliably. However, we do not guarantee uninterrupted access or error-free operation. The application may occasionally be unavailable due to maintenance, updates, technical issues, or circumstances beyond our control.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>Limitation of Liability</h2>
          <p className='text-lg text-gray-500 mt-5'>TodoApp is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. To the fullest extent permitted by law, TodoApp shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use the application, including loss of data, missed reminders, or business interruptions.</p>
        </div>
        <div className="mt-5">
          <h2 className='text-2xl font-semibold'>Contact Us</h2>
          <p className='text-lg text-gray-500 mt-5'>If you have any questions regarding these Terms & Conditions, please contact us through the Contact Us section of TodoApp or via our official support email. We are committed to addressing your questions and providing assistance whenever possible.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TermConditions
