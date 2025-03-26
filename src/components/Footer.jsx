// src/components/Footer.jsx
'use client'

import { useState } from 'react'
import { 
  FaTwitter, 
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaPaperPlane 
} from 'react-icons/fa'

import { PiWaveformBold } from "react-icons/pi";

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Newsletter signup logic
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  const socialLinks = [
    { Icon: FaFacebook, href: "https://facebook.com/profile.php?id=61567536163970" },
    { Icon: FaInstagram, href: "https://instagram.com/bookhaven_12" },
    { Icon: FaSpotify, href: "https://open.spotify.com/show/3qSKgCOBRuGRwVQRAC2gaf?si=GlbY-P0OR9-4pBH-uBxCbw" },
    { Icon: PiWaveformBold, href: "https://audiomack.com/gold-obioma" },
  ]

  return (
    <footer id='contact' className="bg-primary-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Gold's BookHaven</h3>
            <p className="text-gray-200">
              Become a better version of yourself through books. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Book Reviews", href: "#reviews" },
                { name: "Services", href: "#services" },
                { name: "About Me", href: "#about" },
                { name: "FAQs", href: "#faqs" }
              ].map(({ name, href }) => (
                <li key={name}>
                  <a 
                    href={href} 
                    className="hover:text-primary-gold transition duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 text-black rounded-l-lg focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-primary-gold text-black p-2 rounded-r-lg 
                hover:bg-yellow-500 transition duration-300"
              >
                <FaPaperPlane />
              </button>
            </form>
            <p className="text-sm mt-2 text-gray-200">
              Subscribe for weekly book recommendations and podcast updates.
            </p>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row 
        justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map(({ Icon, href }, index) => (
              <a 
                key={index} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-gold transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} GoldBookHaven. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}