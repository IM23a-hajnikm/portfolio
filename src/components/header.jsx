"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Github, Linkedin } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    (<header className="max-w-7xl mx-auto px-4 py-4">
      <div
        className="border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 grid grid-cols-3 bg-white dark:bg-gray-900">
        {/* Left section: Hamburger and Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            aria-label="Toggle menu">
            <Menu size={22} />
          </button>
          <span className="font-medium text-gray-800 dark:text-gray-100">Martin Hajnik</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Informatiker | Applikationsentwickler EFZ</span>
        </div>

        {/* Middle section: Navigation */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white pb-1 ${
                  pathname === "/" ? "border-b-2 border-gray-800 dark:border-gray-200" : ""
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white pb-1 ${
                  pathname === "/about" ? "border-b-2 border-gray-800 dark:border-gray-200" : ""
                }`}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white pb-1 ${
                  pathname === "/projects" ? "border-b-2 border-gray-800 dark:border-gray-200" : ""
                }`}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white pb-1 ${
                  pathname === "/contact" ? "border-b-2 border-gray-800 dark:border-gray-200" : ""
                }`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right section: Theme toggle and Social links */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="https://github.com/IM23a-hajnikm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            aria-label="GitHub">
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/martin-hajnik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <div className="border-l border-gray-200 dark:border-gray-700 h-5 mx-1"></div>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900">
          <nav>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white block ${pathname === "/" ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white block ${pathname === "/about" ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white block ${pathname === "/projects" ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white block ${pathname === "/contact" ? "font-medium" : ""}`}
                  onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>)
  );
}

