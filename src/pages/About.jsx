import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart, FiAward } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import Stats from '../components/Stats/Stats'
import CTA from '../components/CTA/CTA'
import { teamMembers } from '../data/data'
import './About.css'

const values = [
  { icon: <FiHeart />, title: "Integrity First", desc: "We never oversell. Every itinerary, every price, every promise is exactly as communicated — no hidden fees, no surprises." },
  { icon: <FiAward />, title: "Excellence in Detail", desc: "From the first phone call to the final airport drop-off, we obsess over the small details that turn a good trip into an unforgettable one." },
  { icon: <FiTarget />, title: "Customer-Centric", desc: "Your dream trip, your way. We listen first, design second, and adjust until it's exactly what you envisioned." },
  { icon: <FiEye />, title: "Forward-Thinking", desc: "We continuously explore new destinations, partnerships, and technologies to bring you better travel experiences year after year." }
]

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="About Us | Devntric Travels & Tours"
        description="Learn about Devntric Travels & Tours — Bangladesh's trusted travel agency since 2016. Our story, mission, vision, and the team behind your journeys."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">About Devntric</span>
          <h1>Our Story, Mission & The People Behind It</h1>
          <p>Eight years of turning travel dreams into reality — one journey, one traveler, one memory at a time.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about__story">
          <motion.div
            className="about__story-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80" alt="Devntric Travels team planning a trip" />
            <div className="about__story-badge">
              <span>8+</span>
              <p>Years of Trusted Service</p>
            </div>
          </motion.div>

          <motion.div
            className="about__story-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>Our Story</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Born From a Love of <span>Discovery</span>
            </h2>
            <p>
              Devntric Travels & Tours began in 2016 with a simple frustration: booking a quality international trip from Bangladesh was unnecessarily complicated, expensive, and full of uncertainty. Our founder, Imtiaz Hossain, had spent years in the airline industry watching travelers get overcharged and under-informed.
            </p>
            <p>
              So he built something different — a travel agency that treats every traveler like a friend planning their first big trip. Today, we've helped over 15,000 Bangladeshi travelers explore more than 50 countries, processed thousands of visa applications, and built lasting partnerships with airlines and hotels across the globe.
            </p>
            <p>
              What hasn't changed is our promise: honest pricing, meticulous planning, and a team that's genuinely excited about your journey — because we are too.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about__mv">
        <div className="container">
          <div className="grid-2">
            <motion.div
              className="about__mv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FiTarget className="about__mv-icon" />
              <h3>Our Mission</h3>
              <p>To make world-class travel accessible, affordable, and stress-free for every Bangladeshi traveler — by combining honest pricing, expert planning, and genuine care at every step of the journey.</p>
            </motion.div>
            <motion.div
              className="about__mv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FiEye className="about__mv-icon" />
              <h3>Our Vision</h3>
              <p>To become South Asia's most trusted travel brand by 2030 — known not for being the biggest agency, but for being the one travelers recommend to their own families without hesitation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Core Values</span>
            <h2 className="section-title">What Guides <span>Everything We Do</span></h2>
          </div>
          <div className="grid-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="about__value"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="about__value-icon">{val.icon}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Meet The Team</span>
            <h2 className="section-title">The People Behind Your <span>Next Adventure</span></h2>
            <p className="section-subtitle">A small, dedicated team of travel experts who genuinely love what they do.</p>
          </div>
          <div className="about__team-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="about__team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <span className="about__team-role">{member.role}</span>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="section about__trust">
        <div className="container">
          <div className="about__trust-inner">
            <div>
              <span className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>Why Clients Trust Us</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Built on Transparency, <span>Proven by Results</span></h2>
              <ul className="about__trust-list">
                <li>✓ IATA-accredited agency with verified industry credentials</li>
                <li>✓ 94%+ visa approval rate across 50+ countries</li>
                <li>✓ Transparent, all-inclusive pricing with zero hidden fees</li>
                <li>✓ 24/7 emergency support during every active tour</li>
                <li>✓ Direct partnerships with airlines and hotels for better rates</li>
                <li>✓ Bangladesh Tourism Excellence Award winner, 2023</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80" alt="Happy travelers with Devntric Travels" />
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </motion.div>
  )
}
