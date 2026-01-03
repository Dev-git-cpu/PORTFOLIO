import { useState,useEffect } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    )

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme",theme)
    },[theme])
    return(
        <>
<button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg
      bg-gray-200 dark:bg-gray-800
      text-black dark:text-white
      transition-all duration-300"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
        </>
    )
}
export default ThemeToggle