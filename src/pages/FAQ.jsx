import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMessageCircle } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import FAQAccordion from '../components/FAQ/FAQAccordion'
import { faqs } from '../data/data'
import './FAQ.css'

const categories = ['All', ...new Set(faqs.map(f => f.category))]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="FAQ | Devntric Travels & Tours"
        description="Frequently asked questions about booking, payments, visa processing, cancellations, and our tour packages at Devntric Travels & Tours."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">FAQ</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before booking your next adventure.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-page__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-grid__filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <FAQAccordion items={filtered} />

          <motion.div
            className="faq-page__cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiMessageCircle className="faq-page__cta-icon" />
            <h3>Still Have Questions?</h3>
            <p>Our travel experts are ready to help with anything not covered above.</p>
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
