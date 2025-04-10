import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Globe } from 'lucide-react'

export const metadata = {
  title: 'Projects - Martin Hajnik Portfolio',
  description: 'Explore the projects and work by Martin Hajnik',
}

export default function ProjectsPage() {
  // Projects data based on Martin's CV
  const projects = [
    {
      id: 'notenrechner-ims',
      title: 'Notenrechner IMS',
      description: 'Ein Notenrechner für die IMS Hottingen zur automatisierten Berechnung von Durchschnittsnoten.',
      longDescription: 'Dieses Projekt ist ein Notenrechner speziell für die IMS Hottingen entwickelt, der die automatisierte Berechnung von Durchschnittsnoten ermöglicht. Die Anwendung hilft Schülern, ihre Noten zu verfolgen und Durchschnitte zu berechnen.',
      tags: ['NextJS', 'React', 'PostgreSQL'],
      githubUrl: 'https://github.com/IM23a-hajnikm/notenrechner',
      liveUrl: '',
      featured: true
    },
    {
      id: 'swiss-pharma',
      title: 'Swiss Pharma Informations-Website',
      description: 'Eine Informations-Website über die Schweizer Pharmaindustrie.',
      longDescription: 'Diese Informations-Website bietet umfassende Einblicke in die Schweizer Pharmaindustrie. Sie enthält Informationen über Unternehmen, Produkte, Forschung und Entwicklung sowie die wirtschaftliche Bedeutung der Pharmaindustrie in der Schweiz.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/IM23a-hajnikm/swiss-pharma',
      liveUrl: '',
      featured: true
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio-Website',
      description: 'Meine persönliche Portfolio Website.',
      longDescription: 'Diese Portfolio-Website wurde mit Next.js und Tailwind CSS entwickelt, um meine Projekte, Fähigkeiten und berufliche Erfahrung zu präsentieren. Die Website verfügt über ein responsives Design und optimierte Performance.',
      tags: ['NextJS', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/IM23a-hajnikm/portfolio',
      liveUrl: 'https://martinhajnik.com',
      featured: true
    }
    

  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Projects</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Here's a collection of my recent work. Each project represents a unique challenge and solution.
        </p>
      </div>

      {/* Project Filters - could be expanded with actual filtering functionality */}
      <div className="flex flex-wrap justify-center gap-3">
        <button className="bg-gray-900 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium btn-primary dark:shadow-md dark:shadow-purple-900/20">
          All Projects
        </button>
        <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-purple-700/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-purple-900/20">
          NextJS
        </button>
        <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-purple-700/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-purple-900/20">
          React
        </button>
        <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-purple-700/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-purple-900/20">
          HTML/CSS
        </button>
        <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-purple-700/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-purple-900/20">
          JavaScript
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 dark:border-purple-700/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <div className="h-48 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium flex items-center gap-1">
                  View details <ArrowRight size={14} />
                </Link>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      aria-label="GitHub Repository">
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      aria-label="Live Demo">
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] rounded-xl p-8 text-center mt-12 border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Interested in working together?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link 
          href="/contact" 
          className="bg-gray-900 hover:bg-gray-800 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block btn-primary dark:hover:from-purple-600 dark:hover:to-blue-600 dark:shadow-md dark:shadow-purple-900/20">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}