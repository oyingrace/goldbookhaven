// src/components/Testimonials.jsx
'use client'

import { useState,useEffect } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Amara K",
    title: "Bestselling Author",
    quote: "The 5 AM Club changed my mornings! I used to wake up late and feel rushed. Now, I follow the 5 AM Club routine, and my days feel more productive and peaceful! ",
    image: "/images/author-4.jpg"
  },
  {
    name: "David O",
    title: "Literary Critic",
    quote: "The 20-20-20 routine gave me focus! Spending 20 minutes on movement, reflection, and learning every morning has made me sharper and more disciplined.",
    image: "/images/author-1.jpg"
  },
  {
    name: "Chidi M",
    title: "Book Club Founder",
    quote: "Eat That Frog helped me stop procrastinating!  used to put off difficult tasks, but now I tackle them first. This book made me more efficient!",
    image: "/images/author-2.jpg"
  },
  {
    name: "Emmanuel A",
    title: "Book Club Founder",
    quote: "Atomic Habits changed my life! Small changes every day helped me build better habits. I feel in control of my growth!",
    image: "/images/author-3.jpg"
  },
]

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    )
  }

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    if (isHovered) return; // Stop auto-scroll when hovered
    const interval = setInterval(nextTestimonial, 3000);
    return () => clearInterval(interval);
  }, [isHovered]); // Depend on isHovered to pause/resume

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: { x: "0%", opacity: 1, transition: { duration: 0.6 } },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  const { name, title, quote, image } = testimonials[currentTestimonial]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInFrom("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-12 text-primary-purple dark:text-primary-gold"
        >
          What Our Community Says
        </motion.h2>

        <div className="max-w-3xl mx-auto relative overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 
            bg-primary-purple text-white p-2 rounded-full 
            hover:bg-primary-gold hover:text-black 
            transition duration-300 z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 
            bg-primary-purple text-white p-2 rounded-full 
            hover:bg-primary-gold hover:text-black 
            transition duration-300 z-10"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Slider */}
          <div className="relative w-full h-[300px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
                className="absolute bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full"
              >
                <FaQuoteLeft
                  className="text-4xl text-primary-purple 
                dark:text-primary-gold absolute top-4 left-4 opacity-20"
                />
                <p className="text-xl italic mb-6 text-gray-700 dark:text-gray-300">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-purple"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary-purple dark:text-primary-gold">
                  {testimonials[currentTestimonial].name}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}