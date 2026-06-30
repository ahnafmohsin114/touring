import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiMapPin, FiCalendar, FiUsers, FiArrowRight, FiPlay } from 'react-icons/fi'
import './Hero.css'

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1800&q=85",
    badge: "🏖️ Southeast Asia",
    title: "Discover the",
    titleHighlight: "Temples of Thailand",
    subtitle: "Golden pagodas, emerald islands, and street food that'll change your world. Thailand is waiting for you.",
    cta: "Explore Thailand Tours",
    ctaPath: "/packages?dest=thailand"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1800&q=85",
    badge: "🌟 Middle East",
    title: "Experience the",
    titleHighlight: "Luxury of Dubai",
    subtitle: "Where desert sands meet sky-high ambitions. Dubai is the city that makes every dream feel achievable.",
    cta: "See Dubai Packages",
    ctaPath: "/packages?dest=dubai"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1800&q=85",
    badge: "💑 Honeymoon Special",
    title: "Escape to the",
    titleHighlight: "Paradise of Maldives",
    subtitle: "Your private overwater bungalow, crystalline lagoons, and a sunset only the two of you will see.",
    cta: "View Maldives Packages",
    ctaPath: "/packages?dest=maldives"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1800&q=85",
    badge: "🕌 Heritage & Culture",
    title: "Walk Through",
    titleHighlight: "Ancient Turkey",
    subtitle: "Two continents, one country. From Hagia Sophia to Cappadocia's fairy chimneys, Turkey is timeless.",
    cta: "Explore Turkey Tours",
    ctaPath: "/packages?dest=turkey"
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="hero">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero__bg"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="hero__overlay" />

      {/* Content */}
      <div className="container hero__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span
              className="hero__badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slide.badge}
            </motion.span>

            <h1 className="hero__title">
              {slide.title}<br />
              <span className="hero__title-highlight">{slide.titleHighlight}</span>
            </h1>

            <p className="hero__subtitle">{slide.subtitle}</p>

            <div className="hero__actions">
              <Link to={slide.ctaPath} className="btn btn-accent btn-lg">
                {slide.cta} <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                <span className="hero__play"><FiPlay /></span> Our Story
              </Link>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">15K+</span>
                <span className="hero__stat-label">Happy Travelers</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">50+</span>
                <span className="hero__stat-label">Countries</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">8+</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="hero__search-wrap">
        <div className="container">
          <motion.div
            className="hero__search"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="hero__search-title">Find Your Perfect Tour</h3>
            <div className="hero__search-fields">
              <div className="hero__search-field">
                <FiMapPin className="hero__search-icon" />
                <div className="hero__search-input">
                  <label>Destination</label>
                  <select>
                    <option>Where do you want to go?</option>
                    <option>Thailand</option>
                    <option>Dubai</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Turkey</option>
                    <option>Singapore</option>
                    <option>Cox's Bazar</option>
                    <option>Sajek Valley</option>
                  </select>
                </div>
              </div>
              <div className="hero__search-divider" />
              <div className="hero__search-field">
                <FiCalendar className="hero__search-icon" />
                <div className="hero__search-input">
                  <label>Travel Date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="hero__search-divider" />
              <div className="hero__search-field">
                <FiUsers className="hero__search-icon" />
                <div className="hero__search-input">
                  <label>Travelers</label>
                  <select>
                    <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>3–5 Persons</option>
                    <option>6–10 Persons</option>
                    <option>10+ Persons</option>
                  </select>
                </div>
              </div>
              <Link to="/packages" className="btn btn-primary hero__search-btn">
                <FiSearch /> Search Tours
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator ${i === current ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <div className="hero__scroll-dot" />
      </motion.div>
    </section>
  )
}
