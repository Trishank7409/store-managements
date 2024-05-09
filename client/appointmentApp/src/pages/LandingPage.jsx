import React from 'react'
import { NavLink } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='flex justify-center gap-10 place-items-center h-[85vh] overflow-hidden '>
   


     

<NavLink to="/login">
<button  className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black">
LogIn
</button>
</NavLink>


<NavLink to="/signup">
<button  className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black">
Signup
</button>
</NavLink>


    </div>
  )
}

export default LandingPage
