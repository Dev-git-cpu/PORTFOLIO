import React from 'react'

const Skills = () => {

    const skillCategories =[
        {
            title: "Backend",
            description: "Server-side technologies and frameworks",
            skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JPA"],
        },
        {
    title: "Frontend",
    description: "Client-side technologies and frameworks",
    skills: ["JavaScript", "React", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Databse",
    description: "Client-side technologies and frameworks",
    skills: ["MySQL", "MongoDB", "PostgreSQL","Oracle","SQL","Database Design","Query Optimization"],
  },
  {
    title: "Tools",
    description: "Development and deployment tools",
    skills: [ "IntelliJ IDEA", "Git", "GitHub"]
  }
    ]
  return (
<>
<section className='max-w-6xl mx-auto px-4 py-10'>
    <div className='grid place-items-center'>
    <h1 className='text-4xl font-bold'>Technical <span className='text-blue-600'> Skills</span></h1>
    <p className='mt-6'>A comprehensive toolkit for building modern, scalable applications</p>
</div>

<div className=' bg-gray-950 border border-gray-900 rounded-xl p-6' >
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {skillCategories.map((category, index) => (
    <div
      key={index}
      className="bg-gray-950 border border-gray-900 rounded-xl p-6  hover:border-blue-800"
    >
      <h2 className="text-xl font-semibold">
        {category.title}
      </h2>

      <p className="text-gray-400 mt-2">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

</div>

    

</section>
</>  )
}

export default Skills