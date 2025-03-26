// src/components/CommunityJoinBanner.jsx
"use client";
import {motion} from "framer-motion";

const fadeInFrom = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

export default function CommunityJoinBanner() {
    return (
      <section className="bg-primary-purple text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
          variants={fadeInFrom("left")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}
          className="mb-6 md:mb-0 md:pr-12">

            <h2
            className="text-4xl font-bold mb-4">
              Read, Apply and Thrive
            </h2>
            <p className="text-xl text-gray-200">
              Join our community of like-minded individuals today.
            </p>
          </motion.div>

          <motion.div
          variants={fadeInFrom("right")} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false }}>
            <a 
              href="https://bit.ly/BOOKHAVEN" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary-gold 
              text-black font-semibold rounded-lg 
              hover:bg-yellow-500 transition duration-300 
              transform hover:scale-105 text-center"
            >
              Join Us
            </a>
          </motion.div>
        </div>
      </section>
    )
  }