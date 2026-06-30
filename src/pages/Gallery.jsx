import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO/SEO'
import GalleryGrid from '../components/Gallery/GalleryGrid'
import CTA from '../components/CTA/CTA'

export default function Gallery() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Gallery | Devntric Travels & Tours"
        description="Browse our travel gallery — stunning photos from Thailand, Dubai, Maldives, Turkey, Cox's Bazar, Sajek Valley and more destinations."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Photo Gallery</span>
          <h1>Moments Captured Around the World</h1>
          <p>A glimpse into the journeys we've created for our travelers — filter by destination and click to explore.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CTA />
    </motion.div>
  )
}
