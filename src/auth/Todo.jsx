import { useState, useEffect } from 'react';
import { FaTrash, FaRegCircle, FaCheckCircle, FaTasks } from 'react-icons/fa';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import api from '../services/api';


const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [color, setColor] = useState("gray");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;
    const token = localStorage.getItem("token");

    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${api}/tasks`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setTasks(res.data.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const colorStyles = {
        red: {
            text: "text-red-400",
            border: "border-red-400",
        },
        blue: {
            text: "text-blue-500",
            border: "border-blue-500",
        },
        green: {
            text: "text-green-500",
            border: "border-green-500",
        },
        yellow: {
            text: "text-yellow-500",
            border: "border-yellow-500",
        },
        gray: {
            text: "text-gray-500",
            border: "border-gray-500",
        },
        pink: {
            text: "text-pink-500",
            border: "border-pink-500",
        },
        black: {
            text: "text-black-500",
            border: "border-black-500",
        },
    }

    // # submit form data
    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!task) {
                toast.error("You must write a task", {
                    style: {
                        background: "#030712",
                        color: "tomato",
                        fontSize: "16px",
                        borderRadius: "8px",

                    }
                });
                return;
            }

            const res = await axios.post(`${api}/tasks/add-task`, {
                userId: userId,
                task: task,
                color: color,
                taskDone: false,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Task Created:", res.data);
            if (res.data.status == 'success') {
                setTask("");
                setColor("gray");
                fetchTasks();
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log('Error creating task', error);
        }
    }

    // delete task record by id

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Are you sure')) {
                const res = await axios.delete(`${api}/tasks/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.data.status === "success") {
                    fetchTasks();
                    toast.success(res.data.message);

                }
            }

        } catch (error) {
            console.log("Error deleting task", error);
        }
    }

    // # handleIsDone: mark as done point

    const markAsdone = async (task) => {
        try {

            const res = await axios.put(`${api}/tasks/${task._id}/done`, {
                taskDone: !task.taskDone,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.data.status === "success") {
                fetchTasks();
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log("Error the isDone mark", error);
        }
    }

    const clearAll = async () => {
        try {
            if (window.confirm("Are you sure you want to clear all tasks?")) {
                const res = await axios.delete(`${api}/tasks/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.data.status === "success") {
                    fetchTasks();
                    toast.success(res.data.message);
                }
            }

        } catch (error) {
            console.log("Error clear the all task ");
        }
    }

    return (
        <div>
            <section className="min-h-screen py-6 px-4 md:px-6">

                <div className='bg-gray-200 flex items-center justify-center text-white px-5 py-5'>
                    {/* container */}
                    <div className="w-full max-w-3xl mx-auto">
                        {/* header */}
                        <div className="bg-gray-500 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-5">
                            {/* left */}
                            <div className="">
                                <h1 className="text-2xl md:text-4xl font-bold mb-2">Codiarc Planing Task</h1>
                                <p className="text-sm md:text-base text-zinc-400">Use  this app multiple task in to do setup</p>
                            </div>
                            {/* right */}
                            <div className="text-5xl text-gray-800">
                                <FaTasks />
                            </div>
                        </div>

                        {/* form*/}
                        <form
                            onSubmit={handlerSubmit}
                            className="bg-gray-600 p-5 rounded-xl mt-3 flex flex-col lg:flex-row gap-4"
                        >
                            <input type="text" value={task}
                                onChange={(e) => setTask(e.target.value)}
                                placeholder='Write your task here....'
                                className="flex-1 px-4 py-3 bg-gray-900 rounded-md outline-none" />
                            {/* choose the color list */}
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {/* Red */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="red"
                                        checked={color === "red"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-red-500 block ${color === "red"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                                {/* pink */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="pink"
                                        checked={color === "pink"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-pink-500 block ${color === "pink"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                                {/* Blue */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="blue"
                                        checked={color === "blue"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-blue-500 block ${color === "blue"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                                {/* green */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="green"
                                        checked={color === "green"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-green-500 block ${color === "green"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                                {/* yellow */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="yellow"
                                        checked={color === "yellow"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-yellow-500 block ${color === "yellow"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                                {/* gray */}
                                <label className="cursor-pointer">
                                    <input type="radio"
                                        name='color'
                                        value="gray"
                                        checked={color === "gray"}
                                        onClick={(e) => setColor(e.target.value)}
                                        className="hidden" />
                                    <span className={`w-6 h-6 rounded-full bg-gray-300 block ${color === "gray"
                                        ? "border-2 border-white"
                                        : "border-2 border-transparent"
                                        }`}>
                                    </span>
                                </label>
                            </div>

                           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md w-full lg:w-auto">Submit</button>
                        </form>

                        {/* tasks */}
                        <ul className="flex flex-col gap-2 w-full mt-3">
                            {/* tasks list */}
                            {tasks
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .map((task) => (
                                    <li key={task._id} className="bg-gray-600 rounded-xl p-5 flex flex-col md:flex-row justify-between gap-4">
                                        {/* Content */}
                                       <div className={`flex-1 border-l-4 ${colorStyles[task.color].border} pl-4`}>
                                            <p className={`${!task.taskDone ? "text-xl mb-1" : "text-xl mb-1 line-through text-gray-400"} text-xl mb-1`}>{task.task}</p>
                                            <span className="text-sm text-zinc-400">Create On task</span>{" "}
                                            <span className={`text-sm ${colorStyles[task.color].text}`}>{new Date(task.createdAt).toLocaleDateString('en-US', {
                                                weekday: "long"
                                            })}</span>{" "}
                                            <span className={`text-sm ${colorStyles[task.color].text}`}>{new Date(task.createdAt).toLocaleDateString('en-US', {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric"
                                            })}{" "}
                                                {new Date(task.createdAt).toLocaleTimeString('en-US', {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                        </div>

                                        {/* button delete */}
                                        <div className="flex items-center justify-end md:justify-center gap-4">
                                            <button className="text-red-500 cursor-pointer" onClick={() => handleDelete(task._id)}>
                                                <FaTrash />
                                            </button>
                                            <button className="text-gray-400 cursor-pointer text-lg" onClick={() => markAsdone(task)}>
                                                {!task.taskDone ? <FaRegCircle /> : <FaCheckCircle />}
                                            </button>
                                        </div>

                                    </li>
                                ))
                            }

                        </ul>


                        {/* Clear All Buttons */}
                        {tasks.length > 0 && (
                            <button className='bg-gray-700 mt-2 w-full py-3 px-5 rounded-xl cursor-pointer hover:bg-gray-800' onClick={clearAll}>
                                Clear All Task
                            </button>
                        )}

                    </div >
                </div>
            </section>
            <ToastContainer />
        </div >
    )
}

export default Todo
