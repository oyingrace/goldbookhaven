// src/app/page.js
import Hero from '@/components/Hero'
import AboutAuthor from '@/components/AboutAuthor'
import Services from '@/components/Services'
import Consultation from '@/components/Consultation'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import BookReviews from '@/components/BookReviews'
import CommunityStats from '@/components/CommunityStats'
import CommunityJoinBanner from '@/components/CommunityJoinBanner'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Services />
      <BookReviews/>
      <CommunityStats />
      <CommunityJoinBanner />
      <AboutAuthor />
        <Consultation />
        <Testimonials />
        <FAQ />
    </main>
  )
}