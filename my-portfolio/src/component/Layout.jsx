import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col
      bg-white dark:bg-gray-950
      text-black dark:text-white
      transition-colors duration-300"
    >
      <Navbar />

      <div className="flex justify-end px-6 py-3">
        <ThemeToggle />
      </div>

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
