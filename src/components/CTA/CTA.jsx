import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__bg" />
      <div className="container">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="cta__eyebrow">Ready for an Adventure?</span>
          <h2 className="cta__title">Your Next Journey Starts With One Conversation</h2>
          <p className="cta__subtitle">
            Talk to our travel experts today and get a free, no-obligation custom itinerary built around your budget and dreams.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-accent btn-lg">
              Plan My Trip <FiArrowRight />
            </Link>
            <a href="tel:+8801700000000" className="btn btn-outline btn-lg">
              <FiPhoneCall /> Call +880-1700-000000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
