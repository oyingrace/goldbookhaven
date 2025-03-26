// src/components/FAQ.jsx
'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {motion} from "framer-motion"

const faqData = [
  {
    question: "What makes a book successful?",
    answer: "A successful book is one that resonates with its target audience, has a clear and compelling message, and is well-written and edited."
  },
  {
    question: "How do I choose a genre for my book?",
    answer: "Choose a genre that aligns with your writing style, interests, and target audience."
  },
  {
    question: "What is the importance of editing in the writing process?",
    answer: "Editing is crucial to refine your writing, ensure accuracy, and enhance the overall quality of your book."
  },
  {
    question: "How can I overcome self-doubt as a writer?",
    answer: "Recognize your strengths, focus on your goals, and cultivate a growth mindset."
  },
  {
    question: "What habits can I develop to improve my writing skills?",
    answer: "Develop habits like regular writing, reading, and learning  something new daily."
  }
]

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id='faqs' className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">

        <motion.h2 
         variants={fadeInFrom("left")} 
         initial="hidden" 
         whileInView="visible" 
         viewport={{ once: false }}
        className="text-4xl font-bold text-center mb-12 text-primary-purple dark:text-primary-gold">
          Frequently Asked Questions
        </motion.h2>

        <motion.div 
         variants={fadeInFrom("right")} 
         initial="hidden" 
         whileInView="visible" 
         viewport={{ once: false }}
        className="max-w-2xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden 
              dark:border-gray-700"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center 
                p-4 text-left bg-gray-100 dark:bg-gray-700 
                hover:bg-gray-200 dark:hover:bg-gray-600 
                transition duration-300"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-primary-purple dark:text-primary-gold" />
                ) : (
                  <FaChevronDown className="text-primary-purple dark:text-primary-gold" />
                )}
              </button>
              {activeIndex === index && (
                <div 
                  className="p-4 bg-white dark:bg-gray-800 
                  text-gray-700 dark:text-gray-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}