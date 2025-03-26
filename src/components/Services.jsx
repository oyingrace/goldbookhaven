// src/components/Services.jsx
"use client";
import { 
    FaBook, 
    FaUserTie, 
    FaChartLine,
    FaCalendarAlt
  } from 'react-icons/fa'

  import {motion} from 'framer-motion'
  
  const serviceData = [
    {
      icon: FaUserTie,
      title: 'Personal Coaching',
    },
    {
      icon: FaBook,
      title: 'Book Review Services for Authors and Publishers',
    },
    {
      icon: FaCalendarAlt,
      title: 'Book Consultations',
    },
    {
      icon: FaChartLine,
      title: 'Growth Strategy Development',
    },
  
  ]

  const fadeInFrom = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  });
  
  export default function Services() {
    return (
      <section id="services" className="min-h-screen w-full py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">

          <motion.h2 
           variants={fadeInFrom("right")} 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: false }}
          className="text-4xl font-bold text-center mb-12 text-primary-purple dark:text-primary-gold">
            Services We Offer
          </motion.h2>

          <motion.div 
           variants={fadeInFrom("left")} 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md 
                transform transition duration-300 hover:scale-105 hover:shadow-xl 
                text-center"
              >
                <div className="flex justify-center mb-4">
                  <service.icon 
                    className="text-5xl text-primary-purple dark:text-primary-gold" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }