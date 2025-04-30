import React from "react";
import { Link, Links } from "react-router";
import { useNavigate } from "react-router";
import { useRef } from "react";
import axios from 'axios'
import toastify from 'toastify'
const Register = () => {
    const formRef=useRef();
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    async function handleSubmit(e) {
      e.preventDefault(); // ✅ Prevent default form behavior
  
      try {
        const response = await axios.post("http://localhost:5500/users/register", {
          name:nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        console.log(response);
        
        formRef.current.reset();
        if(response.status===201)
        {
          toastify.success("Register Succesfully")
          navigate('/login');
        }
        // Optionally redirect user or store token here
      } catch (error) {
        toastify.error(error);
        console.error("Register failed:", error.response?.data || error.message);
        // Optionally show error to user
      }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              ref={nameRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              ref={emailRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              ref={passwordRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <Link to={'/login'} className="text-blue-600 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
