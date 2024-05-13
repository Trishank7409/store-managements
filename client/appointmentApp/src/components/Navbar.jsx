import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Logo from "../assets/pngegg.png";
// import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutHandler = async () => {
    try {
      // Make a POST request to the logout API
      const response = await fetch("http://localhost:4000/api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      localStorage.removeItem("accessToken");

      setIsLoggedIn(false);
      localStorage.clear();
      toast.success("Logged Out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error (e.g., show error message)
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center max-w-6xl mx-auto h-20 ">
        {isLoggedIn ? (
            <div className="ml-5">
              <img src={Logo} className="h-14" alt="Logo" />
            </div>
        ) : (
            <div className="ml-5">
              <img src={Logo} className="h-14" alt="Logo" />
            </div>
        )}

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button className="text-slate-100" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        <div className="hidden sm:flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {!isLoggedIn && (
            <NavLink to="/login">
              <button className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black">
                Login
              </button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/signup">
              <button className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold">
                SignUp
              </button>
            </NavLink>
          )}

        {/* <div className="flex flex-col"> */}
        {isLoggedIn && (
          <div className="flex gap-7">
              <p>Dashboad</p>

              </div>
           
          )}
         
           
        {/* </div> */}
        

{isLoggedIn && (
            <NavLink to="/">
              <button
                className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black"
                onClick={logoutHandler}
                // onClick={ 
                //   () => {
                //   setIsLoggedIn(false);
                //   toast.success("Logged Out");
                // }}
              >
                Logout
              </button>
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-900 text-white p-4">
          <NavLink to="/" className="block py-2">
            Dashboard
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
