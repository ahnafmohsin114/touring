import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { FiClock, FiUsers, FiX, FiCheck, FiArrowRight, FiCalendar } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import CTA from '../components/CTA/CTA'
import { packages } from '../data/data'
import './Packages.css'

const categoryTabs = [
  { key: 'all', label: 'All Packages' },
  { key: 'international', label: 'International' },
  { key: 'domestic', label: 'Domestic' },
  { key: 'honeymoon', label: 'Honeymoon' }
]

export default function Packages() {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get('cat') || 'all')
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const pkg = packages.find(p => p.slug === hash)
      if (pkg) setSelectedPkg(pkg)
    }
  }, [])

  const filtered = useMemo(() => {
    let list = activeTab === 'all' ? packages : packages.filter(p => p.category === activeTab)
    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [activeTab, sortBy])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Tour Packages | Devntric Travels & Tours"
        description="Browse our international and domestic tour packages — Thailand, Malaysia, Singapore, Dubai, Turkey, Maldives, Cox's Bazar, Sajek Valley and more."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Tour Packages</span>
          <h1>Find Your Perfect Getaway</h1>
          <p>Eight carefully curated packages, each with a fully unique itinerary, inclusions, and price.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="packages__toolbar">
            <div className="packages__tabs">
              {categoryTabs.map(tab => (
                <button
                  key={tab.key}
                  className={`packages__tab ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="packages__sort">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Package List */}
          <motion.div className="packages__grid" layout>
            <AnimatePresence>
              {filtered.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="packages__item"
                  id={pkg.slug}
                >
                  <div className="packages__item-image">
                    <img src={pkg.image} alt={pkg.title} loading="lazy" />
                    <span className={`packages__item-badge packages__item-badge--${pkg.badgeColor}`}>{pkg.badge}</span>
                  </div>
                  <div className="packages__item-body">
                    <div className="packages__item-meta">
                      <span><FiClock /> {pkg.duration}</span>
                      <span><FiUsers /> {pkg.groupSize}</span>
                      <span className="packages__item-rating">★ {pkg.rating} ({pkg.reviews})</span>
                    </div>
                    <h3>{pkg.title}</h3>
                    <p className="packages__item-subtitle">{pkg.subtitle}</p>
                    <div className="packages__item-highlights">
                      {pkg.highlights.map((h, i) => (
                        <span key={i} className="packages__item-tag">{h}</span>
                      ))}
                    </div>
                    <div className="packages__item-footer">
                      <div>
                        <span className="packages__item-price">৳{pkg.price.toLocaleString()}</span>
                        <span className="packages__item-price-original">৳{pkg.originalPrice.toLocaleString()}</span>
                        <span className="packages__item-perperson">/ per person</span>
                      </div>
                      <button className="btn btn-primary btn-sm" onClick={() => setSelectedPkg(pkg)}>
                        View Details <FiArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="packages__empty">
              <p>No packages found in this category. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div
            className="pkg-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPkg(null)}
          >
            <motion.div
              className="pkg-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="pkg-modal__close" onClick={() => setSelectedPkg(null)} aria-label="Close package details">
                <FiX />
              </button>

              <div className="pkg-modal__hero">
                <img src={selectedPkg.image} alt={selectedPkg.title} />
                <div className="pkg-modal__hero-overlay" />
                <div className="pkg-modal__hero-text">
                  <span className={`pkg-modal__badge pkg-modal__badge--${selectedPkg.badgeColor}`}>{selectedPkg.badge}</span>
                  <h2>{selectedPkg.title}</h2>
                  <p>{selectedPkg.subtitle}</p>
                </div>
              </div>

              <div className="pkg-modal__body">
                <div className="pkg-modal__quick-info">
                  <div><FiClock /> <strong>{selectedPkg.duration}</strong><span>Duration</span></div>
                  <div><FiUsers /> <strong>{selectedPkg.groupSize}</strong><span>Group Size</span></div>
                  <div>★ <strong>{selectedPkg.rating}/5.0</strong><span>{selectedPkg.reviews} Reviews</span></div>
                  <div>৳ <strong>{selectedPkg.price.toLocaleString()}</strong><span>Per Person</span></div>
                </div>

                <div className="pkg-modal__columns">
                  <div className="pkg-modal__main-col">
                    <h3>Day-by-Day Itinerary</h3>
                    <div className="pkg-modal__itinerary">
                      {selectedPkg.itinerary.map((day, i) => (
                        <div key={i} className="pkg-modal__day">
                          <div className="pkg-modal__day-num">Day {day.day}</div>
                          <div>
                            <h4>{day.title}</h4>
                            <p>{day.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3>Tour Highlights</h3>
                    <ul className="pkg-modal__highlights">
                      {selectedPkg.highlights.map((h, i) => (
                        <li key={i}>✨ {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pkg-modal__side-col">
                    <div className="pkg-modal__price-box">
                      <span className="pkg-modal__price-label">Starting From</span>
                      <div className="pkg-modal__price-row">
                        <span className="pkg-modal__price-current">৳{selectedPkg.price.toLocaleString()}</span>
                        <span className="pkg-modal__price-old">৳{selectedPkg.originalPrice.toLocaleString()}</span>
                      </div>
                      <span className="pkg-modal__price-sub">per person, twin sharing</span>
                      <a href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                        <FiCalendar /> Book This Tour
                      </a>
                      <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                        Chat on WhatsApp
                      </a>
                    </div>

                    <div className="pkg-modal__includes-box">
                      <h4>Package Includes</h4>
                      <ul>
                        {selectedPkg.includes.map((item, i) => (
                          <li key={i}><FiCheck className="pkg-modal__check-icon" /> {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pkg-modal__excludes-box">
                      <h4>Not Included</h4>
                      <ul>
                        {selectedPkg.excludes.map((item, i) => (
                          <li key={i}><FiX className="pkg-modal__cross-icon" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </motion.div>
  )
}
