// src/components/CommunityStats.jsx
"use client";
import { FaBookReader, FaPodcast, FaBook, FaUsers } from 'react-icons/fa';
import {motion} from "framer-motion";

const statsData = [
  {
    icon: FaBookReader,
    value: '15K+',
    label: 'Active Readers'
  },
  {
    icon: FaPodcast,
    value: '200+',
    label: 'Podcast Episodes'
  },
  {
    icon: FaBook,
    value: '1.2K+',
    label: 'Book Reviews'
  },
  {
    icon: FaUsers,
    value: '50K+',
    label: 'Community Members'
  }
]

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

export default function CommunityStats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
        variants={fadeInFrom("right")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center 
              p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md 
              transform transition duration-300 hover:scale-105"
            >
              <stat.icon 
                className="text-4xl mb-4 text-primary-purple 
                dark:text-primary-gold"
              />
              <h3 className="text-3xl font-bold text-primary-purple 
              dark:text-primary-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}