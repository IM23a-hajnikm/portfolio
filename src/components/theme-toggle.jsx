"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme")
    
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If no stored theme, check system preference
      setTheme("dark")
    }
  }, [])

  // Update DOM when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 relative overflow-hidden
        hover:bg-gray-100 dark:hover:bg-opacity-10 dark:hover:bg-purple-800
        border border-transparent dark:border-purple-700/30
        dark:bg-gradient-to-br dark:from-purple-900/40 dark:to-blue-900/40
        dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-700 dark:text-purple-300" />
      ) : (
        <Sun size={20} className="text-amber-500 dark:text-amber-300" />
      )}
    </button>
  )
}