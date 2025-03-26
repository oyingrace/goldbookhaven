// src/components/BookReviews.jsx
"use client";
import Image from 'next/image'
import { FaStar, FaSpotify, } from 'react-icons/fa'
import { PiWaveformBold } from "react-icons/pi";
import { motion } from 'framer-motion'
import Link from 'next/link'

const bookReviews = [
  {
    title: "The Quantum Leap Strategy",
    author: "Dr Price Pritchett",
    cover: "/images/quantum-leap-book.png",
    rating: 4.5,
    excerpt: "Often times, people get stuck with the same results or outcome, they forget that if you want a different result, then you jave to do things in a different way.",
    spotifyLink: "https://open.spotify.com/episode/4XOBm4ZKSPVU0njT1PXJ4q?si=MTZyfSFgSV-p_QNzRJkmeA",
    audiomackLink: "https://audiomack.com/gold-obioma/song/67bbc430bb2a5"
  },
  {
    title: "The Seven Spiritual Laws",
    author: "Deepak Chopra",
    cover: "/images/seven-spiri.jpeg",
    rating: 4.8,
    excerpt: "There are several unwritten rules that guides us as individuals regardless of your status, colour, and background. These laws are highly spiritual, that's exactly what this episode talks about",
    spotifyLink: "https://open.spotify.com/episode/1ZxY642XH44GHOH7KQdQM2?si=ZmidneqpSTupwnN1ZzA8hQ",
    audiomackLink: "https://audiomack.com/gold-obioma/song/book-review-of-the-7-spiritual-laws-of-success-by-deepak-chopra"
  },
  {
    title: "Essentialism",
    author: "Greg Mckeown",
    cover: "/images/essentialism.jpeg",
    rating: 4.2,
    excerpt: "Your ability to select your vital few activities out of the trivial many is a 21st century skill that everyone should have. That's what I've talked about on this episode.",
    spotifyLink: "https://open.spotify.com/episode/2ib586oc6AVRfXGJ3SWGwP?si=CE1WM3kDQ02Sd8zEZRd3BA",
    audiomackLink: "https://audiomack.com/gold-obioma/song/book-review-of-essentialism-by-greg-mckeown"
  }
]

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

export default function BookReviews() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={
          index < Math.floor(rating)
            ? "text-primary-gold"
            : index === Math.floor(rating) && rating % 1 !== 0
            ? "text-primary-gold opacity-50"
            : "text-gray-300"
        }
      />
    ))
  }

  return (
    <section id='reviews' className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        <motion.h2 
        variants={fadeInFrom("right")} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }}
        className="text-4xl font-bold text-center mb-12 text-primary-purple dark:text-primary-gold">
          Latest Book Reviews
        </motion.h2>

        <motion.div
         variants={fadeInFrom("left")} 
         initial="hidden" 
         whileInView="visible" 
         viewport={{ once: false }}
        className="grid md:grid-cols-3 gap-8">
          {bookReviews.map((book, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
              transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-[200px] w-full">
                <Image 
                  src={book.cover} 
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-purple dark:text-primary-gold mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">by {book.author}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{book.excerpt}</p>
                
                <div className="flex items-center gap-4 mb-4">
  <span className="text-gray-500 dark:text-gray-400 text-sm">Listen on</span>
  
  <motion.a 
    href={book.spotifyLink} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-3xl text-green-500 hover:text-green-600 transition duration-300"
    animate={{ scale: [1, 1.4, 1] }} 
    transition={{ repeat: Infinity, duration: 0.5 }}
  >
    <FaSpotify />
  </motion.a>

  <motion.a 
    href={book.audiomackLink} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-3xl text-orange-500 hover:text-orange-600 transition duration-300"
    animate={{ scale: [1, 1.4, 1] }}
    transition={{ repeat: Infinity, duration: 0.5 }}
  >
    <PiWaveformBold />
  </motion.a>
</div>

                
                <div className="flex items-center mt-4">
                  {renderStars(book.rating)}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
        <Link 
          href="https://open.spotify.com/show/3qSKgCOBRuGRwVQRAC2gaf?si=GlbY-P0OR9-4pBH-uBxCbw"
          className="px-16 py-4 bg-primary-purple text-white font-semibold rounded-full 
          hover:bg-primary-gold hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          See All Books
        </Link>
      </div>
      </div>
    </section>
  )
}
