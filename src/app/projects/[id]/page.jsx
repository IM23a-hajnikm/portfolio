import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, Globe, Calendar, Tag } from 'lucide-react'

// This would typically come from a database or CMS
const projects = {
  'project-one': {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment processing capabilities.',
    longDescription: 'This project involved building a complete e-commerce solution from the ground up. It includes user authentication, product catalog with filtering and search, shopping cart functionality, checkout process with Stripe integration, and an admin dashboard for managing products and orders.',
    problem: 'The client needed a custom e-commerce solution that could integrate with their existing inventory management system while providing a modern, user-friendly shopping experience.',
    solution: 'I designed and developed a custom e-commerce platform using React and Next.js for the frontend, with a Node.js backend and MongoDB database. The application integrates with Stripe for payment processing and features a responsive design that works seamlessly across all devices.',
    features: [
      'User authentication and account management',
      'Product catalog with categories, filtering, and search',
      'Shopping cart and wishlist functionality',
      'Secure checkout with multiple payment options',
      'Order tracking and history',
      'Admin dashboard for product and order management',
      'Integration with inventory management system',
      'Responsive design for mobile and desktop'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'Redux'],
    date: 'January 2023',
    client: 'Retail Solutions Inc.',
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.martinhajnik.com'
  },
  'project-two': {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'This task management application allows teams to organize projects, assign tasks, set deadlines, and track progress. It features real-time updates using WebSockets, drag-and-drop interfaces for task management, and detailed reporting capabilities.',
    problem: 'A growing startup needed a better way to manage their projects and tasks across multiple teams. They found existing solutions either too complex or lacking in collaborative features.',
    solution: 'I built a custom task management application that focuses on simplicity and real-time collaboration. The app uses a drag-and-drop interface for intuitive task management and WebSockets for instant updates across all team members.',
    features: [
      'Project and task organization with customizable workflows',
      'Real-time updates and notifications',
      'Task assignment and deadline management',
      'File attachments and comments',
      'Progress tracking and reporting',
      'Team collaboration tools',
      'Calendar integration',
      'Mobile-responsive design'
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'React', 'Redux', 'Material UI'],
    date: 'June 2022',
    client: 'TechStart GmbH',
    role: 'Lead Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/task-manager',
    liveUrl: 'https://taskapp.martinhajnik.com'
  },
  'project-three': {
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
    longDescription: 'This weather dashboard pulls data from multiple weather APIs to provide comprehensive weather information. It includes current conditions, hourly forecasts, 7-day outlooks, and weather maps with various data layers.',
    problem: 'Users needed a more comprehensive and visually appealing way to access weather data than what was available through standard weather apps.',
    solution: 'I developed a feature-rich weather dashboard that combines data from multiple weather APIs to provide detailed forecasts, interactive maps, and customizable alerts. The application uses Vue.js for a responsive frontend and Firebase for user preferences storage.',
    features: [
      'Current conditions and detailed forecasts',
      'Interactive weather maps with multiple data layers',
      'Location search and favorites',
      'Hourly, daily, and weekly forecasts',
      'Weather alerts and notifications',
      'Historical weather data',
      'Customizable dashboard layout',
      'Dark mode support'
    ],
    technologies: ['Vue.js', 'Firebase', 'Weather API', 'Tailwind CSS', 'Chart.js', 'Mapbox'],
    date: 'October 2022',
    client: 'Personal Project',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/weather-app',
    liveUrl: 'https://weather.martinhajnik.com'
  },
  'project-four': {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.',
    longDescription: 'This portfolio website was built using Next.js and Tailwind CSS. It features a responsive design, dark mode support, and optimized performance. The site includes sections for showcasing projects, skills, and contact information.',
    problem: 'I needed a professional online presence to showcase my work and skills to potential clients and employers.',
    solution: 'I designed and developed a personal portfolio website using Next.js and Tailwind CSS. The site features a clean, modern design with sections for projects, skills, and contact information. It's fully responsive and optimized for performance.',
    features: [
      'Responsive design for all device sizes',
      'Project showcase with detailed case studies',
      'Skills and experience sections',
      'Contact form with validation',
      'Performance optimized with Next.js',
      'Clean, modern UI with Tailwind CSS',
      'SEO optimized',
      'Fast loading times'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design', 'Vercel'],
    date: 'March 2023',
    client: 'Personal Project',
    role: 'Designer & Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/portfolio',
    liveUrl: 'https://martinhajnik.com'
  },
  'project-five': {
    title: 'Recipe Sharing Platform',
    description: 'A community-driven recipe sharing platform where users can discover, share, and save recipes.',
    longDescription: 'This recipe sharing platform allows users to discover new recipes, share their own creations, and build personal collections. Features include recipe search with filtering by ingredients and dietary restrictions, user profiles, ratings and reviews, and a recommendation system.',
    problem: 'Food enthusiasts needed a better way to discover, share, and organize recipes based on their preferences and dietary needs.',
    solution: 'I created a recipe sharing platform that allows users to discover recipes based on ingredients they have, dietary restrictions, and preferences. The platform includes social features for sharing and rating recipes, as well as personal collections for saving favorites.',
    features: [
      'Recipe search with ingredient and dietary filters',
      'User profiles and recipe collections',
      'Recipe creation and sharing tools',
      'Ratings and reviews system',
      'Personalized recipe recommendations',
      'Shopping list generation',
      'Nutritional information',
      'Mobile-friendly design'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'Redux', 'Express'],
    date: 'August 2022',
    client: 'Culinary Connections Ltd.',
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/recipe-app',
    liveUrl: 'https://recipes.martinhajnik.com'
  },
  'project-six': {
    title: 'Budget Tracker',
    description: 'A personal finance application for tracking expenses, income, and budgeting goals.',
    longDescription: 'This budget tracking application helps users manage their personal finances by tracking income, expenses, and savings goals. It includes features like transaction categorization, budget planning, expense analysis with charts and graphs, and financial goal setting.',
    problem: 'Individuals needed a simple yet powerful tool to track their finances, set budgets, and visualize their spending habits.',
    solution: 'I developed a budget tracking application that works offline and provides intuitive visualizations of spending patterns. The app uses local storage to ensure privacy and includes features for categorizing transactions, setting budget limits, and tracking financial goals.',
    features: [
      'Income and expense tracking',
      'Transaction categorization',
      'Budget planning and limits',
      'Expense analysis with charts',
      'Financial goal setting and tracking',
      'Recurring transaction management',
      'Data export for tax purposes',
      'Offline functionality'
    ],
    technologies: ['JavaScript', 'Chart.js', 'IndexedDB', 'PWA', 'Local Storage', 'HTML5', 'CSS3'],
    date: 'April 2022',
    client: 'Personal Project',
    role: 'Frontend Developer',
    githubUrl: 'https://github.com/IM23a-hajnikm/budget-tracker',
    liveUrl: 'https://budget.martinhajnik.com'
  }
};

export async function generateMetadata({ params }) {
  const project = projects[params.id];
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }
  
  return {
    title: `${project.title} - Martin Hajnik Portfolio`,
    description: project.description
  };
}

export default function ProjectPage({ params }) {
  const project = projects[params.id];
  
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-xl text-gray-700 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/projects" 
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 btn-primary">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2 transition-colors">
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>
      
      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl">{project.description}</p>
      </div>
      
      {/* Project Image */}
      <div className="bg-gray-100 rounded-xl h-96 mb-12 flex items-center justify-center">
        <span className="text-gray-400">Project Image</span>
      </div>
      
      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700">{project.longDescription}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-700">{project.problem}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-700">{project.solution}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Project Details</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Date</h3>
                <p className="text-gray-900 flex items-center gap-2">
                  <Calendar size={16} />
                  {project.date}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Client</h3>
                <p className="text-gray-900">{project.client}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Role</h3>
                <p className="text-gray-900">{project.role}</p>
              </div>
              
              <div className="pt-4 flex flex-col gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 btn-primary">
                    <Globe size={16} />
                    View Live Project
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 btn-secondary">
                    <Github size={16} />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Project Images */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Image {item}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Next Project */}
      <div className="border-t border-gray-200 pt-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Projects</h2>
          <Link 
            href="/projects" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}