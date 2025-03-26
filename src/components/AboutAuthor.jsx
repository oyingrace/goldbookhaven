// src/components/AboutAuthor.jsx
"use client";
import Image from 'next/image'
import { 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaPodcast 
} from 'react-icons/fa'
import {motion} from 'framer-motion'

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});


export default function AboutAuthor() {
  return (
    <section id='about' className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Author Image */}
          <motion.div 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden border-4 border-primary-purple 
            shadow-lg mx-auto max-w-[300px]">
              <Image 
                src="/images/author-photo.jpeg" 
                alt="Book Haven Host" 
                width={300} 
                height={300} 
                className="object-cover" 
              />
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div 
          variants={fadeInFrom("right")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="md:w-2/3 md:pl-12">
  <h2 className="text-4xl font-bold mb-2 text-primary-purple dark:text-primary-gold">
    Meet Gold Obioma
  </h2>
  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
    Book Consultant, Reviewer, Podcaster and Growth Strategist
  </p>
  
  {/* Horizontal Line */}
  <hr className="border-t-2 border-primary-purple dark:border-primary-gold w-24 mb-6" />

  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
  As a trailblazing book consultant and growth strategist,
   I empower authors, publishers, and aspiring writers to transform their
    literary dreams into published masterpieces that Impacts their readers worldwide.
    With a passion for books, personal growth, and creative collaboration, I
     help individuals and organizations navigate the ever-evolving publishing
      landscape and achieve unprecedented success. 
      <br></br><br></br>Together, we can create something extraordinary!
  </p>

  {/* Social Media Links */}
  <div className="flex space-x-6 mt-6">
    {[
      { Icon: FaTwitter, href: "https://twitter.com" },
      { Icon: FaInstagram, href: "https://instagram.com" },
      { Icon: FaLinkedin, href: "https://linkedin.com" },
    ].map(({ Icon, href }, index) => (
      <a 
        key={index} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-3xl text-primary-purple dark:text-primary-gold 
        hover:text-primary-gold dark:hover:text-white 
        transition duration-300"
      >
        <Icon />
      </a>
    ))}
  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}