import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
<>
<div className='grid place-items-center py-6 gap-4'>
    <div className='py-4 flex gap-4'>
        <a href="https://github.com/Dev-git-cpu" className='hover:text-blue-600'><FiGithub size={25}/></a>
        <a href="https://www.linkedin.com/in/devsonone/" className='hover:text-blue-600'><SlSocialLinkedin size={25}/></a>
        <a href="" className='hover:text-blue-600'><MdOutlineMailOutline size={25}/></a>
        
        </div>
    
    <p className='text-center text-gray-500'>© 2026 Full Stack Developer. All rights reserved.</p>
    </div>

</>
)
}

export default Footer