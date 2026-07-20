import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import api from "../services/api";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [agreepolicies, setAgreepolicies] = useState(false);

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    if (!confirmpassword) {
      toast.error("Please confirm your password");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
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
      const res = await axios.post(`${api}/users/register`, {
        name,
        email,
        password,
        confirmpassword,
      });
      toast.success(res.data.message);
      // Reset Form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
      setAgreepolicies(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed!"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="max-w-xl mx-auto py-6 px-8">
        <div className="shadow-2xl rounded-lg py-5 px-10 bg-white">
          <div className="flex items-center justify-center gap-2 text-3xl font-semibold">
            <span className="text-green-500">
              <FaEdit />
            </span>
            <span>
              Todo<span className="text-green-500">App</span>
            </span>
          </div>

          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-700">
              Create An Account
            </h1>
            <p className="mt-2 text-gray-500">
              Create your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmitRegister} method="post" className="mt-6">
            <div className="space-y-4">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create your password"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="agreepolicies"
                  name="agreepolicies"
                  type="checkbox"
                  checked={agreepolicies}
                  onChange={(e) => setAgreepolicies(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />

                <label
                  htmlFor="agreepolicies"
                  className="text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms-conditions"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`flex w-full items-center justify-center rounded-md px-4 py-3 font-semibold text-white transition ${loading
                  ? "cursor-not-allowed bg-green-400"
                  : "bg-green-600 hover:bg-green-700"
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

                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default SignUp
