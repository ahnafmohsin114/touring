import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO/SEO'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'

export default function TestimonialsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Testimonials | Devntric Travels & Tours"
        description="Read what our 15,000+ travelers say about their experience with Devntric Travels & Tours — real reviews, real journeys."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Testimonials</span>
          <h1>15,000+ Travelers Can't Be Wrong</h1>
          <p>Real stories from real travelers who trusted us with their journeys.</p>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </motion.div>
  )
}
