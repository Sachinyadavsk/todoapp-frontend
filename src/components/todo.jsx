import { useState, useEffect } from 'react';
import { FaTrash, FaRegCircle, FaCheckCircle, FaTasks } from 'react-icons/fa';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import api from '../services/api';



const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [color, setColor] = useState("gray");



    // Fetch the task

    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${api}/tasks/`);
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
                task: task,
                color: color,
                taskDone: false,
            });

            console.log("Task Created:", res.data);
            setTask("");
            setColor("gray");
            fetchTasks();
            toast.success(res.data.message);

        } catch (error) {
            console.log('Error creating task', error);
        }
    }

    // delete task record by id

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Are you sure')) {
                const res = await axios.delete(`${api}/tasks/${id}`);
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
                const res = await axios.delete(`${api}/tasks/`);
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
        <div className="py-15 px-10 min-h-screen w-full bg-gray-500 flex items-center justify-center text-white">
            {/* container */}
            <div className="w-250">
                {/* header */}
                <div className="bg-gray-800 w-full h-fit p-5 rounded-xl flex items-center justify-between gap-5">
                    {/* left */}
                    <div className="">
                        <h1 className="text-3xl mb-2">Codiarc Planing Task</h1>
                        <p className="text-sm text-zinc-400">Use  this app multiple task in to do setup</p>
                    </div>
                    {/* right */}
                    <div className="text-5xl text-gray-500"></div>
                    <FaTasks />
                </div>

                {/* form*/}
                <form onSubmit={handlerSubmit} className="bg-gray-800 flex justify-between gap-5 p-5 rounded-xl mt-3 w-full">
                    <input type="text" value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Write your task here....'
                        className="px-3 py-2 bg-gray-900 w-full rounded-md outline-0" />
                    {/* choose the color list */}
                    <div className="flex items-center gap-4">
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

                    <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md cursor-pointer">Submit</button>
                </form>

                {/* tasks */}
                <ul className="flex flex-col gap-2 w-full mt-3">
                    {/* tasks list */}
                    {tasks
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((task) => (
                            <li key={task._id} className="w-full bg-gray-950 px-6 py-5 rounded-xl flex justify-between">
                                {/* Content */}
                                <div className={`border-l-5 ${colorStyles[task.color].border} pl-2 rounded-md`}>
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
                                <div className="flex items-center gap-3 ">
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
            <ToastContainer />
        </div >
    )
}

export default App
