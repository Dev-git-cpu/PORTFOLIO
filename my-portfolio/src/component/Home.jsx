import React from 'react'
import { useNavigate } from 'react-router-dom'
import Skills from './Skills'
import resume from '../assets/DEV_SONONE_RESUME.pdf'

const Home = () => {
  const navigate = useNavigate()
  return (
   <> <section className='grid place-items-center gap-y-6 max-w-6xl mx-auto px-4 py-44 '>

    <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>Hi, I'm <span className='text-blue-600'>Dev Sonone</span></h2>

     <p className='mt-6 max-w-xl text-2xl text-center text-gray-400'>
       Full Stack Java Developer specializing in building scalable web applications and enterprise solutions
      </p>
      <p className='mt-6 max-w-3xl text-xl text-center text-gray-400'>I create robust backend systems with Java and Spring Boot, paired with modern frontend technologies to deliver exceptional user experiences. Passionate about clean code, performance optimization, and solving complex problems.</p>
      <div className='flex flex-col md:flex-row gap-4 mt-6'>
      
  <button onClick={()=>navigate("/project")} className='mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition'>View Project</button>
      
  <button onClick={()=>window.open(resume,"_blank")} className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-blue-700 transition">Resume</button>
  </div>
   </section>
   <Skills/>
   </>
  )
}

export default Home