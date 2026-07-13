import React from 'react'

const Abouts = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto py-2 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
          <div>
            <h1 className='text-5xl font-bold mt-6 leading-tight'>TodoApp – Organize Your <span className="text-indigo-600">Tasks Efficiently</span></h1>
            <p className='text-gray-600 mt-2 text-lg'>TodoApp is a simple and user-friendly task management application that helps you organize your
              daily activities with ease. You can create, update, complete, search, and delete tasks while keeping
              track of your progress. Designed with a clean and responsive interface, TodoApp makes it easy to stay
              productive whether you're managing personal goals, work assignments, or study schedules.</p>
            <div className="flex gap-4 mt-8">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
                Get Started
              </button>

              <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900"
                alt="Todo Dashboard"
                className="rounded-2xl shadow-xl"
              /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Abouts
