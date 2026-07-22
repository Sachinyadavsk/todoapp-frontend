import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {
    FaListCheck,
    FaCircleCheck,
    FaCirclePause,
    FaSquarePlus,
    FaCalendarDay,
    FaClockRotateLeft
} from "react-icons/fa6";
import axios from "axios";
import api from '../services/api';

const Dashboard = () => {
    const navigate = useNavigate();
    const [tasksDashboard, setTasksDashboard] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!user?.name) {
            toast.warning("Please login !");
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        }
    }, [user, navigate]);

    if (!user?.name) {
        return <ToastContainer />;
    }

    // user id according get task details

    const userTaskDetails = async () => {
        try {
            const res = await axios.get(`${api}/tasks`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setTasksDashboard(res.data.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    useEffect(() => {
        userTaskDetails();
    }, []);

    console.log('tasksDashboard', tasksDashboard);
    const taskTotal = tasksDashboard?.length || 0;

    // Completed tasks
    const activeTask = tasksDashboard?.filter(task => task.taskDone).length || 0;

    // Pending tasks
    const inactiveTask = tasksDashboard?.filter(task => !task.taskDone).length || 0;

    // Today's tasks
    const today = new Date().toDateString();

    const todayTask = tasksDashboard?.filter(task =>
        new Date(task.createdAt).toDateString() === today
    ).length || 0;

    // Yesterday's tasks
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayTask = tasksDashboard?.filter(task =>
        new Date(task.createdAt).toDateString() === yesterday.toDateString()
    ).length || 0;


    return (
        <div>
            <section className='max-w-6xl mx-auto py-10 px-8'>
                <p className='text-2xl font-semibold text-gray-400 hover:text-gray-600'> Welcome Dear , {user?.name}</p>
                <h2 className='text-3xl font-bold text-gray-500 mt-3'>Dashboard</h2>

                <div className="mt-4 grid lg:grid-cols-3 gap-10">
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-green-400 text-white hover:bg-green-600 hover:text-xl">
                        <div className="flex gap-5">
                            <i className='mt-2'><FaListCheck /></i>
                            <h1 className='text-2xl font-semibold'>Task Total {" "} ({taskTotal})</h1>
                        </div>
                        <p className="mt-4 text-lg">Displays total number of tasks created across your complete task list.</p>
                    </div>
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-blue-400 text-white hover:bg-blue-600 hover:text-xl">
                        <div className="flex gap-2">
                            <i className='mt-2'><FaCircleCheck /></i>
                            <h1 className='text-xl font-semibold'>Reading Active Task {" "} ({activeTask})</h1>
                        </div>
                        <p className="mt-4 text-lg">Shows currently active tasks requiring attention, progress, or immediate completion today.</p>
                    </div>
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-yellow-400 text-white hover:bg-yellow-600 hover:text-xl">
                        <div className="flex gap-2">
                            <i className='mt-2'><FaCirclePause /></i>
                            <h1 className='text-xl font-semibold'>Reading Inactive Task {" "} ({inactiveTask})</h1>
                        </div>
                        <p className="mt-4 text-lg">Lists inactive tasks paused, archived, or temporarily unavailable for execution purposes.</p>
                    </div>
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-gray-400 text-white hover:bg-gray-600 hover:text-xl">
                        <Link to="/user/task/start">
                            <div className="flex gap-5">
                                <i className='mt-2'><FaSquarePlus /></i>
                                <h1 className='text-2xl font-semibold'>Add New Task </h1>
                            </div>
                            <p className="mt-4 text-lg">Create a new task with title, details, and priority quickly today.</p>
                        </Link>
                    </div>
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-pink-400 text-white hover:bg-pink-600 hover:text-xl">
                        <div className="flex gap-5">
                            <i className='mt-2'><FaCalendarDay /></i>
                            <h1 className='text-2xl font-semibold'>Today Task {" "} ({todayTask})</h1>
                        </div>
                        <p className="mt-4 text-lg">Displays all tasks scheduled for completion during the current day efficiently.</p>
                    </div>
                    <div className="shadow-xl rounded-2xl py-10 px-10 bg-orange-400 text-white hover:bg-orange-600 hover:text-xl">
                        <div className="flex gap-5">
                            <i className='mt-2'><FaClockRotateLeft /></i>
                            <h1 className='text-2xl font-semibold'>Yesterday Task {" "} ({yesterdayTask})</h1>
                        </div>
                        <p className="mt-4 text-lg">Shows tasks completed or pending from the previous day's schedule and.</p>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}

export default Dashboard
