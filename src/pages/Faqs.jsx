import React from 'react'
import Footer from '../components/Footer'

const Faqs = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto py-15 px-10'>
        <h1 className='text-4xl font-bold'>Frequently Asked Questions (FAQs)</h1>
        {/* faqs content list layout set */}
        <div className="">
          <div className="mt-10 border-l-4 px-5 hover:rounded-2xl hover:bg-gray-100 hover:transition-all">
            <h1 className='text-2xl font-semibold'>1. What is TodoApp?</h1>
            <p className='text-lg text-gray-500 mt-3'>TodoApp is a simple and efficient task management application designed to help you organize your daily activities, personal goals, work projects, and reminders. It provides an easy way to create, edit, prioritize, and track tasks so you can stay productive and never miss important deadlines.</p>
          </div>
          <div className="mt-10">
            <h1 className='text-2xl font-semibold'>2. How do I create a new task?</h1>
            <p className='text-lg text-gray-500 mt-3'>Creating a task is easy. Simply click or tap the Add Task button, enter a title and optional description, choose a due date or priority if needed, and save it. Your new task will instantly appear in your task list.</p>
          </div>
          <div className="mt-10">
            <h1 className='text-2xl font-semibold'>3. Can I edit or delete tasks?</h1>
            <p className='text-lg text-gray-500 mt-3'>Yes. TodoApp allows you to edit task details at any time. If a task is no longer needed, you can delete it with a single click. Deleted tasks may be permanently removed depending on the app settings.</p>
          </div>
          <div className="mt-10">
            <h1 className='text-2xl font-semibold'>4. How do I mark a task as completed?</h1>
            <p className='text-lg text-gray-500 mt-3'>Once you've finished a task, simply check the completion box or tap the Complete button. Completed tasks are automatically moved to your completed list or marked accordingly, helping you track your progress.</p>
          </div>
          <div className="mt-10">
            <h1 className='text-2xl font-semibold'>5. Can I organize tasks into categories?</h1>
            <p className='text-lg text-gray-500 mt-3'>Yes. TodoApp supports organizing tasks using categories, labels, or lists. This feature helps separate personal, work, shopping, study, fitness, or any other type of task for better organization.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Faqs
