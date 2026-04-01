import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  const projectCategories = [
    {
      title: "Portfolio",
      description:
        "A responsive personal portfolio website built with React & Tailwind showcasing projects, skills, and experience.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      link: "https://portfolio-frontend-nine-iota.vercel.app/",
    },
    // {
    //   title: "Employee Management System",
    //   description:
    //     "A full-stack app to manage employee records with CRUD operations, authentication, and secure backend APIs.",
    //   skills: [
    //     "React",
    //     "Tailwind",
    //     "Java",
    //     "Spring Boot",
    //     "Spring Security",
    //     "JPA",
    //     "Hibernate",
    //     "SQL",
    //   ],
    //   link: "https://your-portfolio-link.com",
    // },
    {
      title: "VaultPay - Payment Transfer App",
      description:
        "A wallet-based fintech simulation with secure authentication, transaction flow, and backend business logic.",
      skills: [
        "React",
        "Tailwind",
        "Java",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "Hibernate",
        "MySQL",
      ],
      link: "https://vaultpay-frontend-production.up.railway.app/",
    },
    {
      title: "ResolveHub - Complaint Management",
      description:
        "A role-based complaint management system with secure authentication, real-time tracking, and efficient issue resolution workflow.",
      skills: [
        "React",
        "Tailwind",
        "Java",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "Hibernate",
        "SQL",
      ],
      link: "https://resolvehubfrontend-production.up.railway.app/",
    },
  ];

  return (
    <section className="bg-[#0b0f0f] text-white px-6 md:px-16 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-emerald-400">Projects</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A collection of full-stack applications showcasing my expertise
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projectCategories.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md 
              hover:-translate-y-2 hover:border-emerald-400/40 transition duration-300"
            >

              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/0 group-hover:bg-emerald-500/5 transition"></div>

              {/* Title */}
              <h2 className="text-xl font-semibold relative z-10">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 mt-3 relative z-10">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/10 border border-white/10 text-gray-300
                    hover:bg-emerald-500/20 hover:text-emerald-300 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-end mt-6 relative z-10">
                <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full 
    bg-white/10 hover:bg-emerald-500 hover:text-black transition text-sm"
  >
    View
    <FaArrowRightLong className="group-hover:translate-x-1 transition" />
  </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Project;