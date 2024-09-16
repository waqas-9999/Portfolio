import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedCourses from './components/FeaturedCourses'
import WhyChooseUs from './components/WhyChooseUs'
import { HeroParallaxDemo } from './components/WebsitesInfo'
import { TimelineDemo } from './components/TimeLine'
import { FloatingDockDemo } from './components/FloatingDock'
import { MacbookScrollDemo } from './components/MAcbookScroll'
import Footer from './components/Footer'

export default function page() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      {/* <FeaturedCourses />
      <WhyChooseUs /> */}
      <TimelineDemo/>
      <HeroParallaxDemo/>
      <MacbookScrollDemo/>
      <Footer/>
    </main>
  )
}
