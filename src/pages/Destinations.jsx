import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import CTA from '../components/CTA/CTA'
import { destinations } from '../data/data'
import './Destinations.css'

export default function DestinationsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Destinations | Devntric Travels & Tours"
        description="Explore 50+ destinations with Devntric Travels & Tours — from Southeast Asia and the Middle East to Bangladesh's hidden hill stations."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Destinations</span>
          <h1>50+ Destinations Across the Globe</h1>
          <p>Every corner of the world has a story. Find the one that calls to you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dest-page__grid">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                className="dest-page__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <div className="dest-page__image-wrap">
                  <img src={dest.image} alt={dest.name} loading="lazy" />
                  <div className="dest-page__overlay" />
                  <span className="dest-page__flag">{dest.flag}</span>
                  <span className="dest-page__count">{dest.tours} Packages</span>
                </div>
                <div className="dest-page__info">
                  <h3>{dest.name}</h3>
                  <p><FiMapPin /> {dest.country}</p>
                  <Link to={`/packages?dest=${dest.name.toLowerCase()}`} className="dest-page__link">
                    Explore Tours <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  )
}
