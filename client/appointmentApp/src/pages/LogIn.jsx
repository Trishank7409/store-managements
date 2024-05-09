import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
const LogIn = ({setIsLoggedIn}) => {
  return (
   <Template
   title="Welcome Back"
   desc1="Start browsing now and discover the latest trends and must-have items."
   desc2="Happy shopping"
   image={loginImg}
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default LogIn
