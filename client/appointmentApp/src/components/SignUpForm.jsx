import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// this is ecommerce
const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const[accountType,setAccountType]=useState("admin")

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

 async function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/v1/users/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          accountType,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
   
      // setIsLoggedIn(true);
      toast.success("Account Created");

      // Redirect based on account type
      // switch (accountType) {
      //   case "admin":
      //     navigate("/admin/dashboard");
      //     break;
      //   case "employee":
      //     navigate("/employee/dashboard");
      //     break;
        // default:
          navigate("/login");
      // }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Failed to create account. Please try again later.");
    }
  }

  return (
    <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" >
      <div className="flex bg-slate-800 p-1 gap-x-1 mt-6 rounded-full max-w-max ">
        <button className={`${accountType=== "admin"? "bg-slate-900 text-slate-300":"bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("admin")}>Admin</button>
        <button className={`${accountType=== "employee"? "bg-slate-900 text-slate-300":"bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("employee")}>User</button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex w-full gap-x-4 mb-4 mt-4">
          <label className="w-full relative">
            <p className="text-[0.735rem] text-slate-700 mb-1 leading-[1.5rem] font-bold">
              Full Name <sup className="text-pink-400 font-semibold">*</sup>
            </p>
            <input
              type="text"
              name="fullname"
              required
              onChange={changeHandler}
              value={formData.fullname}
              placeholder="Enter first Name"
              className="bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset "
            />
          </label>
          <label className="w-full relative">
            <p className="text-[0.735rem] text-slate-700 mb-1 leading-[1.5rem] font-bold">
              UserName <sup className="text-pink-400 font-semibold">*</sup>
            </p>
            <input
              type="text"
              name="username"
              required
              onChange={changeHandler}
              value={formData.username}
              placeholder="Enter last Name"
              className="bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset "
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.735rem] text-slate-700 mb-1 leading-[1.5rem] font-bold">
            Enter Email Address{" "}
            <sup className="text-pink-400 font-semibold">*</sup>
          </p>
          <input
            type="email"
            name="email"
            required
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter first Name"
            className="bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset "
          />
        </label>
        <div className="flex justify-between  w-full gap-x-4 mt-4">
          <label className="relative w-full">
            <p className="text-[0.735rem] text-slate-700 mb-1 leading-[1.5rem] font-bold">
              Create Password{" "}
              <sup className="text-pink-400 font-semibold">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              required
              onChange={changeHandler}
              value={formData.password}
              placeholder="Create Password"
              className="bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset "
            />
            <span
              className="absolute right-3 top-[40px] cursor-pointer text-white "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="white" />
              ) : (
                <AiOutlineEye fontSize={20} />
              )}
            </span>
          </label>
          <label className="relative w-full ">
            <p className="text-[0.735rem] text-slate-700 mb-1 leading-[1.5rem] font-bold">
              Confirm Password{" "}
              <sup className="text-pink-400 font-semibold">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id=""
              required
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              className="bg-slate-800 rounded-[0.3rem] text-slate-400 w-full p-[10px] ring-1 ring-slate-300 ring-inset "
            />
            <span
              className="absolute right-3 top-[40px] cursor-pointer text-white "
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} />
              ) : (
                <AiOutlineEye fontSize={20} />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
