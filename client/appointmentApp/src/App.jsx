import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import React from "react";

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboad from "./pages/EmployeeDashboad";

function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false)
  return (
<div>
<div className='bg-blue-900'>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
  <Routes>
    <Route path='/' element={<LandingPage  />}/>
    
    {/* <Route path='/' element={<Home/>}/> */}
    <Route path="/admin/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><AdminDashboard/></PrivateRoute>} />
    <Route path="/employee/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><EmployeeDashboad/></PrivateRoute>} />
    <Route path="/user/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><UserDashboard/></PrivateRoute>} />

    <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />

    <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />

  </Routes>

</div>
  )
}

export default App
