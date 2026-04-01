import React from "react";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import resume from "../assets/DEV_SONONE_RESUME.pdf";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6 md:px-12 pt-28">

        <div className="max-w-6xl w-full text-center">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-emerald-400">
              Dev Sonone
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Full Stack Java Developer building scalable web apps & enterprise solutions
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base md:text-lg">
            I specialize in Java & Spring Boot for backend systems and modern frontend
            technologies to create fast, clean, and user-friendly applications.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Button */}
            <button
              onClick={() => navigate("/project")}
              className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-medium shadow-lg shadow-emerald-500/20"
            >
              View Projects
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => window.open(resume, "_blank")}
              className="px-8 py-3 rounded-xl border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition font-medium"
            >
             Resume
            </button>

          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="bg-[#0f0f0f] text-white">
        <div id="skills">
  <Skills />
</div>

<div id="projects">
  <Project />
</div>

<div id="contact">
  <Contact />
</div>
      </div>
    </>
  );
};

export default Home;