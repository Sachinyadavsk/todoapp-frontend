import React from "react";
import {
  FaCheckCircle,
  FaTasks,
  FaClock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaTasks className="text-4xl text-indigo-600" />,
      title: "Task Management",
      desc: "Create, edit, delete and organize your daily tasks easily.",
    },
    {
      icon: <FaClock className="text-4xl text-green-600" />,
      title: "Due Dates",
      desc: "Never miss deadlines with reminders and due dates.",
    },
    {
      icon: <FaUsers className="text-4xl text-pink-600" />,
      title: "Team Collaboration",
      desc: "Share projects and work together with your team.",
    },
  ];

  const plans = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Unlimited Tasks",
        "Task Categories",
        "Mobile Friendly",
      ],
    },
    {
      title: "Pro",
      price: "$9",
      features: [
        "Everything in Free",
        "Priority Support",
        "Cloud Backup",
      ],
    },
    {
      title: "Enterprise",
      price: "$29",
      features: [
        "Unlimited Team",
        "Analytics",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
              Productivity Software
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Organize Your Work <br />
              With <span className="text-indigo-600">TodoApp</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Manage tasks, boost productivity, and stay organized with a
              simple and modern Todo management application.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
                Get Started
              </button>

              <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900"
              alt="Todo Dashboard"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-4xl font-bold">20K+</h2>
            <p>Users</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">1M+</h2>
            <p>Tasks Completed</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">99%</h2>
            <p>Customer Satisfaction</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center">
          Why Choose TodoApp?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to manage your work efficiently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:-translate-y-2 transition"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              "Create an account",
              "Add your daily tasks",
              "Track and complete them",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow text-center"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl mx-auto">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-center text-4xl font-bold">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 shadow hover:shadow-xl"
            >
              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <h4 className="text-5xl font-bold mt-5">
                {plan.price}
                <span className="text-lg">/month</span>
              </h4>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20 text-white text-center">
        <h2 className="text-5xl font-bold">
          Start Managing Your Tasks Today
        </h2>

        <p className="mt-5 text-lg">
          Join thousands of users improving their productivity.
        </p>

        <button className="mt-8 bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto">
          Get Started <FaArrowRight />
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl font-bold text-white">TodoApp</h3>

          <p className="mt-4 md:mt-0">
            © 2026 TodoApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;