import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-[#0f0f0f]/80 backdrop-blur-md 
      border-b border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="cursor-pointer"
         onClick={() => scrollToSection("home")}
        >
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Port<span className="text-emerald-400">folio</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">

          <li
            onClick={() => scrollToSection("home")}
            className="relative cursor-pointer hover:text-emerald-400 transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 hover:w-full"></span>
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="relative cursor-pointer hover:text-emerald-400 transition"
          >
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 hover:w-full"></span>
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="relative cursor-pointer hover:text-emerald-400 transition"
          >
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 hover:w-full"></span>
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="relative cursor-pointer hover:text-emerald-400 transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 hover:w-full"></span>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white mb-1"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#0f0f0f] text-gray-300 space-y-4">

          <p
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="cursor-pointer hover:text-emerald-400"
          >
            Home
          </p>

          <p
            onClick={() => {
              navigate("/project");
              setMenuOpen(false);
            }}
            className="cursor-pointer hover:text-emerald-400"
          >
            Projects
          </p>

          <p
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className="cursor-pointer hover:text-emerald-400"
          >
            Contact
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;