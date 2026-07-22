import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../services/api";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreepolicies, setAgreepolicies] = useState(false);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    if (!agreepolicies) {
      toast.error("Please agree to the Terms & Privacy Policy", {
        style: {
          background: "#030712",
          color: "tomato",
          fontSize: "16px",
          borderRadius: "8px",
        },
      });
      return;
    }


    setLoading(true);
    try {
      const res = await axios.post(`${api}/users/login`, {
        password,
        email,
      });

      if (res.data.status === 'success') {
        // Store token
        localStorage.setItem("token", res.data.token);

        // Store user details
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Store auth status
        localStorage.setItem("isAuth", "true");

        toast.success(res.data.message);

        toast.success(res.data.message);
        // Reset Form
        setEmail("");
        setPassword("");
        setAgreepolicies(false);
        // Redirect
        navigate("/user/dashboard");
      }

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed!"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <section className='max-w-xl mx-auto py-10 px-8'>
        <div className="shadow-2xl mt-4 py-10 px-10">
          <div className="flex text-center justify-center text-3xl font-semibold gap-2">
            <span className='text-blue-500'><FaEdit /></span>
            <span><span>Todo</span><span className='text-blue-500'>App</span></span>
          </div>
          <div className="text-center mt-5">
            <h1 className='text-2xl font-bold text-gray-600'>Welcome Back!</h1>
            <p className='text-xl text-gray-400 mt-2'>Login to your account to continue</p>
          </div>

          <form onSubmit={handleSubmitLogin} method="POST" className="">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder='Enter your email'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                    placeholder='Enter your password'
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                    <input
                      id="agreepolicies"
                      name="agreepolicies"
                      type="checkbox"
                      checked={agreepolicies}
                      onChange={(e) => setAgreepolicies(e.target.checked)}
                      aria-label="Agree to policies"
                      className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                    />
                  </div>
                </div>
                <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
                    Forget Password
                  </a>
                  .
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center rounded-md px-4 py-3 font-semibold text-white transition ${loading
                ? "cursor-not-allowed bg-indigo-400"
                : "bg-indigo-600 hover:bg-indigo-700"
                }`}
            >
              {loading ? (
                <>
                  <svg
                    className="mr-2 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>

                  Logining...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Create have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-green-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

      </section>
      <ToastContainer />
    </div>
  )
}

export default Login
