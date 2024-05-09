import React from 'react'
// import Template from '../components/template'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'
const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Take a Cart and Move your Hands freely"
    desc1="Start browsing now and discover the latest trends and must-have items."
    desc2="Happy shopping"
    image={signupImg}
    setIsLoggedIn={setIsLoggedIn}
    formtype="signup"
    />
  )
}

export default SignUp
