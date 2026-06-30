import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 15000, suffix: '+', label: 'Happy Travelers', icon: '😊', desc: 'Satisfied clients across 8 years' },
  { value: 50, suffix: '+', label: 'Countries Covered', icon: '🌍', desc: 'Destinations across 5 continents' },
  { value: 5000, suffix: '+', label: 'Tours Completed', icon: '✈️', desc: 'Successfully organized journeys' },
  { value: 8, suffix: '+', label: 'Years of Experience', icon: '🏆', desc: 'Trusted since 2016' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stats__item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stats__icon">{stat.icon}</div>
              <div className="stats__number">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stats__label">{stat.label}</div>
              <div className="stats__desc">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
