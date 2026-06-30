import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi'
import { testimonials } from '../../data/data'
import './Testimonials.css'

export default function Testimonials({ limit }) {
  const data = limit ? testimonials.slice(0, limit) : testimonials
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = (dir) => {
    setDirection(dir)
    setCurrent(prev => (prev + dir + data.length) % data.length)
  }

  const t = data[current]

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Our <span>Travelers Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the thousands of travelers who've experienced the Devntric difference.
          </p>
        </motion.div>

        <div className="testimonials__layout">
          {/* Featured */}
          <div className="testimonials__featured">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                className="testimonials__main"
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonials__quote">"</div>
                <p className="testimonials__text">{t.review}</p>
                <div className="testimonials__author">
                  <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
                  <div>
                    <div className="testimonials__name">
                      {t.name}
                      {t.verified && <FiCheckCircle className="testimonials__verified" />}
                    </div>
                    <div className="testimonials__role">{t.role}</div>
                    <div className="testimonials__date">{t.date}</div>
                  </div>
                </div>
                <div className="testimonials__stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials__controls">
              <button
                className="testimonials__btn"
                onClick={() => paginate(-1)}
                aria-label="Previous review"
              >
                <FiChevronLeft />
              </button>
              <div className="testimonials__dots">
                {data.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials__dot ${i === current ? 'active' : ''}`}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="testimonials__btn"
                onClick={() => paginate(1)}
                aria-label="Next review"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* Sidebar list */}
          <div className="testimonials__list">
            {data.map((item, i) => (
              <motion.button
                key={item.id}
                className={`testimonials__list-item ${i === current ? 'active' : ''}`}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <img src={item.avatar} alt={item.name} />
                <div className="testimonials__list-info">
                  <span className="testimonials__list-name">{item.name}</span>
                  <span className="testimonials__list-role">{item.role}</span>
                  <span className="testimonials__list-preview">
                    {item.review.slice(0, 60)}...
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Rating summary */}
        <motion.div
          className="testimonials__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="testimonials__summary-score">
            <span className="testimonials__summary-num">4.9</span>
            <div>
              <div className="stars" style={{ fontSize: '1.2rem' }}>⭐⭐⭐⭐⭐</div>
              <span>out of 5 stars</span>
            </div>
          </div>
          <div className="testimonials__summary-divider" />
          <div className="testimonials__summary-stats">
            {[5, 4, 3].map(stars => (
              <div key={stars} className="testimonials__bar-row">
                <span>{stars} ⭐</span>
                <div className="testimonials__bar">
                  <div
                    className="testimonials__bar-fill"
                    style={{ width: stars === 5 ? '92%' : stars === 4 ? '6%' : '2%' }}
                  />
                </div>
                <span>{stars === 5 ? '92%' : stars === 4 ? '6%' : '2%'}</span>
              </div>
            ))}
          </div>
          <div className="testimonials__summary-divider" />
          <div className="testimonials__summary-platforms">
            <div className="testimonials__platform">
              <span className="testimonials__platform-logo">G</span>
              <span><strong>4.9/5</strong><br />Google Reviews</span>
            </div>
            <div className="testimonials__platform">
              <span className="testimonials__platform-logo" style={{ background: '#1877F2' }}>f</span>
              <span><strong>4.8/5</strong><br />Facebook Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
