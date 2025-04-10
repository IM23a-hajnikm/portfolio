'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Have a question or want to work together? Feel free to reach out using the form below or through my contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-6 rounded-xl border border-gray-200 dark:border-purple-700/20 shadow-sm dark:shadow-lg dark:shadow-purple-900/10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 dark:text-blue-300" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                  <a href="mailto:mhajnik77@gmail.com" className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                    mhajnik77@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600 dark:text-green-300" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                  <a href="tel:+41762633964" className="text-gray-900 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300 transition-colors">
                    +41 76 263 39 64
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600 dark:text-purple-300" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="text-gray-900 dark:text-gray-200">
                    Im Heumos 2, 8906 Bonstetten
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/IM23a-hajnikm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md dark:shadow-purple-900/20"
                  aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/martin-hajnik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md dark:shadow-purple-900/20"
                  aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>


        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] p-8 rounded-xl border border-gray-200 dark:border-purple-700/20 shadow-sm dark:shadow-lg dark:shadow-purple-900/10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Send a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg text-green-800 dark:text-green-300">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gradient-to-r dark:from-purple-800 dark:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md dark:shadow-purple-900/20"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map or Additional Information Section */}
      <div className="mt-16">
        <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-[#1a1333] dark:to-[#0d1a2d] rounded-xl p-6 h-80 flex items-center justify-center border border-gray-200 dark:border-purple-700/20 shadow-sm dark:shadow-lg dark:shadow-purple-900/10">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">Map placeholder</p>
            <p className="text-gray-700 dark:text-gray-300">A map or additional contact information could be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )
}