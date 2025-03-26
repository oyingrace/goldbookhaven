// src/components/Consultation.jsx
'use client'

import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion"

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookTitle: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
    console.log('Consultation Request:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      bookTitle: '',
      message: ''
    })
  }

  const fadeInFrom = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  });
  

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-4xl font-bold text-center mb-12 text-primary-purple dark:text-primary-gold">
          Book a Consultation
        </motion.h2>

        <motion.form 
          variants={fadeInFrom("right")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto bg-white dark:bg-gray-700 
          p-8 rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-primary-purple"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-primary-purple"
            />
          </div>
          <div className="mb-4">
    <select 
      name="genre"
      value={formData.genre}
      onChange={handleChange}
      required
      className="w-full p-3 border rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-primary-purple bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
    >
      <option value="" disabled>Select Book Genre</option>
      <option value="Personal Development">Personal Development</option>
      <option value="Business & Entrepreneurship">Business & Entrepreneurship</option>
      <option value="Mindset & Motivation">Mindset & Motivation</option>
      <option value="Health & Wellness">Health & Wellness</option>
      <option value="Finance & Wealth">Finance & Wealth</option>
      <option value="Leadership">Leadership</option>
      <option value="Productivity">Productivity</option>
    </select>
  </div>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 border rounded-lg mb-4 
            focus:outline-none focus:ring-2 focus:ring-primary-purple"
          />
          <button 
            type="submit" 
            className="w-full flex items-center justify-center 
            bg-primary-purple text-white p-3 rounded-lg 
            hover:bg-primary-gold hover:text-black 
            transition duration-300 ease-in-out"
          >
            <FaPaperPlane className="mr-2" /> Submit Consultation Request
          </button>
        </motion.form>
      </div>
    </section>
  )
}