

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

 async function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    // toast.success('Logged In');
    try {
      const response = await fetch("http://localhost:4000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies in the request
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Login successful
      setIsLoggedIn(true);
      toast.success("Login successful");

      // Redirect to a protected route (e.g., dashboard)
      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Failed to login. Please try again.");
    }
   
    console.log('Printing the form data');
    console.log(formData);
  }

  return (
    <form
      onSubmit={submitHandler}
      className='flex flex-col w-full gap-y-4 mt-6 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'
    >
      <label className='w-full'>
        <p className='text-[0.735rem] mb-1 leading-[1.5rem] font-bold text-black'>
          Email Address<sup className='text-pink-400 font-semibold'>*</sup>
        </p>
        <input
          required
          type='email'
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter email id'
          name='email'
          className='bg-slate-800 rounded-[0.3rem] p-[10px] text-slate-900 w-full ring-1 ring-slate-300'
        />
      </label>

      <label className='w-full relative'>
        <p className='text-[0.735rem] text-slate-900 mb-1 leading-[1.5rem] font-bold'>
          Password<sup className='text-pink-400 font-semibold'>*</sup>
        </p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          placeholder='Enter Password'
          name='password'
          className='bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset'
        />

        <span
          className='absolute right-3 top-[40px] cursor-pointer text-white '
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiOutlineEyeInvisible fontSize={20} /> : <AiOutlineEye fontSize={20} />}
        </span>

        <Link to='#'>
          <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>Forgot Password</p>
        </Link>
      </label>

      <button className='bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6'>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;

