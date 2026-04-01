import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Client-side technologies and frameworks",
      skills: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    },
    {
      title: "Backend",
      description: "Server-side technologies and frameworks",
      skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA"],
    },
    {
      title: "Database",
      description: "Database technologies & optimization",
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Oracle",
        "SQL",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Development and deployment tools",
      skills: ["IntelliJ IDEA", "Postman", "Git", "GitHub","Docker","CI/CD (GitHub Actions)","Railway"],
    },
  ];

  return (
    <section className="bg-[#0b0f0f] text-white px-6 md:px-16 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold">
            Technical{" "}
            <span className="text-emerald-400">Skills</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md 
              hover:border-emerald-400/40 transition duration-300 group"
            >

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/0 group-hover:bg-emerald-500/5 transition"></div>

              <h2 className="text-xl font-semibold relative z-10">
                {category.title}
              </h2>

              <p className="text-gray-400 mt-2 relative z-10">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full 
                    bg-white/10 border border-white/10 text-gray-300
                    hover:bg-emerald-500/20 hover:text-emerald-300 transition"
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
  );
};

export default Skills;