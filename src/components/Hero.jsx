// src/components/Hero.jsx
'use client'

import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaBookOpen, 
  FaMoon, 
  FaSun,
} from 'react-icons/fa'
import { ThemeContext } from '@/context/ThemeContext'
import {motion } from 'framer-motion'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];


  const fadeInFrom = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  });

  return (
    <div className="relative h-[90vh] bg-hero-pattern bg-cover bg-center">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="GoldsBookHaven Logo" 
              width={80} 
              height={80} 
              className="h-auto w-[80px] mr-3"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="text-white hover:text-primary-gold transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="text-white hover:text-primary-gold transition duration-300"
              aria-label="Toggle dark/light mode"
            >
              {isDarkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-primary-gold transition duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-80 absolute left-0 right-0">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href}
                  className="block text-white hover:text-primary-gold py-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
        <motion.div 
        variants={fadeInFrom("left")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="relative z-10 px-4 max-w-2xl">

          <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Gold's BookHaven
          </motion.h1>

          <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-4 drop-shadow-md">
          A growth platform that helps young persons to become better versions of themselves through BOOKS.
          </motion.p>

          <Link 
            href="#reviews" 
            className="inline-flex items-center px-6 py-3 bg-primary-purple text-white 
            rounded-full hover:bg-primary-gold hover:text-black 
            transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaBookOpen className="mr-2" />
            Explore Reviews
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

