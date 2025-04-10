import Image from 'next/image'
import Link from 'next/link'
import { Globe, Code, Database, FileCode, ArrowRight, Server, Github } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Hi, I'm <span className="text-blue-600 dark:text-purple-400">Martin Hajnik</span>
          </h1>
          <h2 className="text-2xl text-gray-800 dark:text-gray-200 mt-2">
            Informatiker | Applikationsentwickler EFZ
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">
            A passionate developer focused on creating functional, user-friendly applications with modern technologies.
          </p>
          <div className="flex gap-4 pt-4">
            <Link 
              href="/projects" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors btn-primary">
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="border border-gray-300 dark:border-purple-700/30 hover:border-gray-400 dark:hover:border-purple-600/50 px-6 py-3 rounded-lg font-medium transition-colors btn-secondary dark:text-white dark:hover:bg-purple-900/20">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <Image 
              src="/profile.svg" 
              alt="Martin Hajnik" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Programming</h3>
              <p className="text-gray-600 dark:text-gray-300">Python, Java, JavaScript, React, NextJS</p>
            </div>
            <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-green-600 dark:text-green-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">MySQL, NoSQL, PostgreSQL</p>
            </div>
            <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-purple-600 dark:text-purple-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Cloud</h3>
              <p className="text-gray-600 dark:text-gray-300">AWS Cloud, Cloud Architecture</p>
            </div>
            <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-orange-600 dark:text-orange-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, SCRUM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="flex items-center gap-2 text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <div className="h-48 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Notenrechner IMS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ein Notenrechner für die IMS Hottingen zur automatisierten Berechnung von Durchschnittsnoten.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">NextJS</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
              <div className="flex justify-between items-center">
                <Link 
                  href="/projects/notenrechner-ims" 
                  className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium flex items-center gap-1">
                  View details <ArrowRight size={14} />
                </Link>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/IM23a-hajnikm/notenrechner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <div className="h-48 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Swiss Pharma Informations-Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Eine Informations-Website über die Schweizer Pharmaindustrie.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">HTML</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">CSS</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">JavaScript</span>
              </div>
              <div className="flex justify-between items-center">
                <Link 
                  href="/projects/swiss-pharma" 
                  className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium flex items-center gap-1">
                  View details <ArrowRight size={14} />
                </Link>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/IM23a-hajnikm/swiss-pharma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <div className="h-48 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Portfolio-Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Meine persönliche Portfolio Website.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">NextJS</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">Tailwind</span>
              </div>
              <div className="flex justify-between items-center">
                <Link 
                  href="/projects/portfolio-website" 
                  className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium flex items-center gap-1">
                  View details <ArrowRight size={14} />
                </Link>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/IM23a-hajnikm/portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    aria-label="GitHub Repository">
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://martinhajnik.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    aria-label="Live Demo">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] text-white py-16 border-t border-transparent dark:border-purple-700/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Interested in working together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact" 
            className="bg-white dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:from-purple-600 dark:hover:to-blue-600 px-8 py-3 rounded-lg font-medium inline-block transition-colors shadow-md dark:shadow-purple-900/20">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

