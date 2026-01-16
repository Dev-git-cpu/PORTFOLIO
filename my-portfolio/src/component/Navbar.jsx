import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className='w-full bg-gray-100 dark:bg-gray-900
      text-black dark:text-white
      border-b border-gray-300 dark:border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>

        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className='text-gray-300 font-bold text-3xl'>
            Port<span className='text-blue-600'>folio</span>
          </h1>
        </div>

        <ul className='hidden md:flex gap-6 text-gray-300'>
          <li
            className='hover:text-blue-800 cursor-pointer'
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className='hover:text-blue-800 cursor-pointer'
            onClick={() => navigate("/project")}
          >
            Projects
          </li>

          <li
            className='hover:text-blue-800 cursor-pointer'
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
