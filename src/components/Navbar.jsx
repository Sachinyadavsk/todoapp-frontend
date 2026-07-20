import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuth = localStorage.getItem("isAuth") === "true";
    const user = JSON.parse(localStorage.getItem("user"));

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-indigo-600"
                    >
                        TodoApp
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-700 hover:text-indigo-600 font-medium transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 outline-none w-52"
                        />
                        <button className="bg-indigo-600 text-white px-4 py-3">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Login Buttons */}
                    {/* Login Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        {isAuth ? (
                            <>
                                <span className="text-gray-700 font-medium">
                                    Welcome, {user?.name}
                                </span>

                                <Link
                                    to="/user/dashboard"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Dashboard
                                </Link>

                                <button
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        localStorage.removeItem("user");
                                        localStorage.removeItem("isAuth");
                                        window.location.reload(); // or navigate("/login")
                                    }}
                                    className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="flex flex-col px-5 py-4 gap-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-indigo-600"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Search */}
                        <div className="flex border rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-1 px-3 py-2 outline-none"
                            />
                            <button className="bg-indigo-600 text-white px-4">
                                <FaSearch />
                            </button>
                        </div>

                        {isAuth ? (
                            <>
                                <Link
                                    to="/user/dashboard"
                                    className="text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        localStorage.removeItem("user");
                                        localStorage.removeItem("isAuth");
                                        window.location.reload(); // or navigate("/login")
                                    }}
                                    className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="text-center bg-indigo-600 text-white py-2 rounded-lg"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}


                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;