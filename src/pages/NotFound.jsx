import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiArrowRight, FiCompass } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import './NotFound.css'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="notfound"
    >
      <SEO title="Page Not Found | Devntric Travels & Tours" description="The page you're looking for doesn't exist." />

      <div className="container notfound__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FiCompass className="notfound__icon" />
          <h1 className="notfound__code">404</h1>
          <h2>Looks Like You've Wandered Off the Map</h2>
          <p>
            The page you're looking for doesn't exist or may have been moved. But don't worry —
            let's get you back on the right path to your next adventure.
          </p>
          <div className="notfound__actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <FiHome /> Back to Home
            </Link>
            <Link to="/packages" className="btn btn-outline-dark btn-lg">
              Explore Tour Packages <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
