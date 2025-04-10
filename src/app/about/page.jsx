import Image from 'next/image'
import Link from 'next/link'
import { FileText, Calendar, Briefcase, GraduationCap, MapPin, Phone, Mail, Star, CheckCircle, Brain, Clock } from 'lucide-react'

export const metadata = {
  title: 'About - Martin Hajnik Portfolio',
  description: 'Learn more about Martin Hajnik, his background, skills, and experience',
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/3">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mx-auto">
            <Image 
              src="/profile.svg" 
              alt="Martin Hajnik" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">About Me</h1>
          <h2 className="text-2xl text-gray-800 dark:text-gray-200">Informatiker | Applikationsentwickler EFZ</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            I'm Martin Hajnik, a passionate developer with a focus on creating functional, user-friendly applications. Currently studying at Informatikmittelschule Hottingen, I'm developing my skills in various programming languages and technologies including Python, Java, JavaScript, and web development frameworks like React and Next.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personal Information</h3>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} /> Born: 23.05.2006
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={16} /> Im Heumos 2, 8906 Bonstetten
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Phone size={16} /> +41 76 263 39 64
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail size={16} /> mhajnik77@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Languages</h3>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <span>Deutsch</span>
                  <span className="text-sm">Muttersprache</span>
                </li>
                <li className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <span>English</span>
                  <span className="text-sm">Fliessend (10 Jahre)</span>
                </li>
                <li className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <span>Französisch</span>
                  <span className="text-sm">8 Jahre</span>
                </li>
                <li className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <span>Slowakisch, Tschechisch</span>
                  <span className="text-sm">Muttersprache</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 btn-primary">
              <FileText size={18} />
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Key Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Brain className="text-blue-600 dark:text-blue-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Learning Readiness</h3>
            <p className="text-gray-600 dark:text-gray-300">Quick to adapt and learn new technologies and methodologies. Constantly expanding my knowledge base.</p>
          </div>
          
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="text-green-600 dark:text-green-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Reliability</h3>
            <p className="text-gray-600 dark:text-gray-300">Committed to delivering high-quality work consistently and meeting deadlines with attention to detail.</p>
          </div>
          
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Star className="text-purple-600 dark:text-purple-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Problem-Solving</h3>
            <p className="text-gray-600 dark:text-gray-300">Analytical thinker with strong problem-solving abilities. Enjoy tackling complex challenges with creative solutions.</p>
          </div>
          
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-purple-700/20 dark:shadow-lg dark:shadow-purple-900/10">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-orange-600 dark:text-orange-300" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Time Management</h3>
            <p className="text-gray-600 dark:text-gray-300">Excellent organizational skills with the ability to prioritize tasks and manage time effectively.</p>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Experience</h2>
        <div className="space-y-8">
          {/* Currently no professional experience yet - student */}
          <p className="text-gray-700 dark:text-gray-300">Currently focusing on my education at Informatikmittelschule Hottingen, where I'm developing practical skills through various projects and coursework.</p>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Education</h2>
        <div className="space-y-8">
          {/* Education Item 1 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-purple-600 dark:text-purple-300" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Informatikmittelschule Hottingen</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base flex items-center gap-1">
                  <Calendar size={16} /> 08/2023 - Present
                </span>
              </div>
              <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-3">Informatiker EFZ, Applikationsentwicklung</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Currently pursuing a vocational education in application development, focusing on programming languages, web development, and software engineering principles. Expected graduation with Federal VET Diploma in Computer Science (EFZ) and Vocational Baccalaureate.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">Java</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">Web Development</span>
              </div>
            </div>
          </div>
          
          {/* Education Item 2 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Kantonsschule Limmattal</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base flex items-center gap-1">
                  <Calendar size={16} /> 08/2021 - 07/2023
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Attended Kantonsschule Limmattal, building a strong foundation in mathematics, sciences, languages, and humanities.
              </p>
            </div>
          </div>
          
          {/* Education Item 3 */}
          <div className="flex gap-6">
            <div className="mt-1">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-green-600 dark:text-green-300" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Sekundarschule Bonstetten</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base flex items-center gap-1">
                  <Calendar size={16} /> 08/2019 - 07/2021
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Completed secondary education at Sekundarschule Bonstetten with excellent academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">IT Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Category 1 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl p-6 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Programming</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Python</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Java</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">React / NextJS</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Skill Category 2 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl p-6 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Databases</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">MySQL</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">NoSQL</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">PostgreSQL</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Skill Category 3 */}
          <div className="border border-gray-200 dark:border-purple-700/20 rounded-xl p-6 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] dark:shadow-lg dark:shadow-purple-900/10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Cloud & Other</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">AWS Cloud</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">SCRUM</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Cloud Architecture</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">HTML/CSS</span>
                <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}