import React from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  // console.log(formtype);
  return (
    <div className="flex gap-x-12 gap-y-0 max-h-[100vh] justify-evenly">
      <div className="w-11/12 max-w-[450px] max-h-full">
        <h1 className="text-slate-900 font-semibold text-[1.875rem] leading-2">
          {title}
        </h1>
        <p className="text=[1.125rem leading 1.623rem] mt-4">
          <span className="text-slate-700">{desc1}</span>
          <br />
          <span className="text-blue-800 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LogInForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center gap-x-2">
          <div className="w-full h-[1px] bg-slate-600"></div>
          <p className="text-slate-600 font-medium leading-2rem align-middle ">
            OR
          </p>
          <div className="w-full h-[1px] bg-slate-600"></div>
        </div>
        <button className="w-full flex bg-blue-600 justify-center items-center rounded-[8px] font-medium text-slate-200 border border-slate-600 px-[12px] py-[8px] gap-x-2 mt-2">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="pattern"
          width={458}
          height={404}
          loading="lazy"
          className="absolute top-8 -right-1.5"
        />
        <img
          src={image}
          alt="student"
          width={658}
          height={594}
          loading="lazy"
          className="absolute top-14 right-2"
        />
      </div>
    </div>
  );
};

export default Template;
