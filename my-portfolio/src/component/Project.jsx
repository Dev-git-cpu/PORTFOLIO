import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Project = () => {

  const projectCategories = [
    {
       title:"Portfolio",
       description:"A responsive personal portfolio website designed to highlight projects, technical skills, and experience, built with React, Tailwind CSS, and modern frontend best practices.",
       skills:["HTML","CSS","JAVASCRIPT","REACT","TAILWIND"],
    },
    {
       title:"Student Management System",
       description:"A full-stack web application designed to manage student records efficiently. The system allows administrators to add, update, view, and delete student information through a secure and user-friendly interface.",
       skills:["HTML","CSS","JAVASCRIPT","REACT","TAILWIND","JAVA","SPRINGBOOT","Spring Security","JPA","Hibernate","SQL"],
    },
    {
       title:"Task-Manager",
       description:"A productivity-focused task management application that helps users organize, track, and manage daily tasks effectively. Users can create tasks, update their status, and maintain productivity with a clean UI.",
       skills:["HTML","CSS","JAVASCRIPT","REACT","TAILWIND","JAVA","SPRINGBOOT"],
       
    },

  ]
  return (
<>
<div className='grid place-items-center gap-y-6 max-w-6xl mx-auto px-4 py-14 '>
  <h1 className='font-bold text-center text-5xl py-10 '>My <span className='text-blue-600'>Projects</span></h1>
  <p className='mt-6 max-w-xl text-xl text-center text-gray-400'>
    A collection of full-stack applications showcasing my expertise in Java, Spring Boot, and modern web technologies</p>
</div>
<div className='grid justify-center bg-gray-950 border border-gray-900 rounded-xl p-6' >
<div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-10">
  {projectCategories.map((category, index) => (
    <div
      key={index}
      className="bg-gray-950 border border-gray-900 rounded-xl p-6  hover:border-blue-800"
    >
      <h2 className="text-xl font-semibold">
        {category.title}
      </h2>

      <p className="text-gray-400 mt-2 max-w-full">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 hover:text-blue-600"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className='flex justify-end items-center px-4 py-2'>     
        <button className='flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-blue-600'>View 
         <FaArrowRightLong className="group-hover:translate-x-1 transition"/></button>
</div>
    </div>
  ))}
</div>

</div>
</>
  )
}

export default Project