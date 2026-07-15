import React from 'react'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-15 px-10'>
        <h1 className='text-3xl font-bold'>Our Services</h1>
        <p className='text-lg text-gray-600 mt-6 border-l-4 px-5 hover:rounded-2xl hover:py-8 '>At TodoApp, our mission is to help individuals and teams stay organized, productive, and focused. We provide a simple yet powerful task management platform that enables users to plan their daily activities, track progress, and accomplish goals with ease. Whether you're managing personal tasks, work projects, study schedules, or household responsibilities, TodoApp offers the tools you need to stay on top of your commitments.</p>
      </section>
      {/* service list layout set design */}
      <section className='max-w-6xl mx-auto py-10 px-5'>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Task Management</h2>
            <p className='text-lg text-gray-500 mt-4'>Our core service is intelligent task management. Users can quickly create, edit, organize, and delete tasks while setting priorities, due dates, and reminders. This makes it easy to manage everything from simple daily to-do lists to complex projects.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Reminders and Notifications</h2>
            <p className='text-lg text-gray-500 mt-4'>Never miss an important deadline again. TodoApp provides reminder and notification features that help you stay informed about upcoming tasks, appointments, meetings, and personal commitments. Timely alerts ensure that your schedule remains organized and manageable.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Project Organization</h2>
            <p className='text-lg text-gray-500 mt-4'>TodoApp allows users to group tasks into projects, categories, or custom lists. Organizing work this way improves productivity by making it easier to manage multiple responsibilities, monitor progress, and keep related tasks together in one place.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Task Prioritization</h2>
            <p className='text-lg text-gray-500 mt-4'>Not every task has the same level of importance. TodoApp enables users to assign priority levels such as High, Medium, or Low, allowing you to focus on the most critical tasks first and manage your workload more efficiently.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Secure Data Storage</h2>
            <p className='text-lg text-gray-500 mt-4'>We value the security of your information. TodoApp uses appropriate security practices to help protect your tasks and account information from unauthorized access while maintaining reliable application performance.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Productivity Tracking</h2>
            <p className='text-lg text-gray-500 mt-4'>TodoApp helps you monitor your achievements by allowing you to view completed tasks, ongoing projects, and pending activities. Tracking your progress encourages better planning, improved productivity, and consistent goal achievement.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Easy-to-Use Interface</h2>
            <p className='text-lg text-gray-500 mt-4'>Our application is designed with simplicity in mind. A clean, intuitive interface allows users of all experience levels to manage tasks without unnecessary complexity. Whether you're a student, professional, freelancer, or business owner, TodoApp is easy to learn and use.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Customer Support</h2>
            <p className='text-lg text-gray-500 mt-4'>Our support team is committed to providing prompt assistance whenever you need help. Whether you have questions about features, experience technical issues, or require guidance, we aim to deliver reliable and timely support through our available communication channels.</p>
          </div>
          <div className='shadow-lg rounded-xl px-5 py-4'>
            <h2 className='text-2xl font-semibold border-l-4 px-5'>Our Commitment</h2>
            <p className='text-lg text-gray-500 mt-4'>TodoApp is dedicated to providing a dependable, user-friendly, and secure task management experience. We strive to help users increase productivity, improve organization, and simplify daily planning through practical and reliable tools. As our services continue to evolve, we remain focused on delivering value, innovation, and an excellent user experience for every user.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
