import React from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f0f] text-white border-t border-white/10 mt-10">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col items-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-6">

          <a
            href="https://github.com/Dev-git-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 
            hover:bg-emerald-500 hover:text-black transition"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/devsonone/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 
            hover:bg-emerald-500 hover:text-black transition"
          >
            <SlSocialLinkedin size={18} />
          </a>

          <a
            href="mailto:devsonone222@gmail.com"
            className="p-3 rounded-full bg-white/5 border border-white/10 
            hover:bg-emerald-500 hover:text-black transition"
          >
            <MdOutlineMailOutline size={20} />
          </a>

        </div>

        {/* Text */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 Dev Sonone. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;