import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiShield, FiDollarSign, FiHeart, FiGlobe, FiHeadphones } from 'react-icons/fi'
import './WhyChooseUs.css'

const features = [
  {
    icon: <FiAward />,
    title: "8+ Years of Excellence",
    desc: "Over 8 years perfecting the art of travel. Every route, every hotel, every moment is carefully curated by our veteran travel consultants.",
    color: "#0EA5E9"
  },
  {
    icon: <FiDollarSign />,
    title: "Best Price Guarantee",
    desc: "Find the same package cheaper anywhere? We'll beat it by 5%. Our direct airline and hotel contracts mean you always get the most value.",
    color: "#F59E0B"
  },
  {
    icon: <FiShield />,
    title: "Visa Success Rate 94%",
    desc: "Our expert visa team has processed 5,000+ applications with a 94% approval rate. We handle the paperwork so you can focus on packing.",
    color: "#10B981"
  },
  {
    icon: <FiHeart />,
    title: "15,000+ Happy Travelers",
    desc: "From honeymooners to corporate executives, 15,000+ travelers have trusted us. Our 4.9/5 average rating speaks louder than any promise.",
    color: "#EF4444"
  },
  {
    icon: <FiGlobe />,
    title: "50+ Destinations",
    desc: "From Bangladesh's hidden hill stations to Europe's iconic cities — we cover 50+ destinations across Asia, Middle East, and beyond.",
    color: "#8B5CF6"
  },
  {
    icon: <FiHeadphones />,
    title: "24/7 Travel Support",
    desc: "Our team never sleeps when you're on tour. Call, WhatsApp, or email us any time — day or night — and we'll be there for you.",
    color: "#EC4899"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Travel Better With <span>Devntric</span></h2>
          <p className="section-subtitle">
            We're not just a travel agency — we're your travel partner. Here's what sets us apart from the rest.
          </p>
        </motion.div>

        <motion.div
          className="why__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="why__card"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="why__icon" style={{ '--icon-color': feat.color }}>
                {feat.icon}
              </div>
              <h3 className="why__title">{feat.title}</h3>
              <p className="why__desc">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          className="why__trust"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="why__trust-item">
            <span className="why__trust-icon">✈️</span>
            <span>IATA Accredited Agency</span>
          </div>
          <div className="why__trust-item">
            <span className="why__trust-icon">🏅</span>
            <span>Bangladesh Tourism Award 2023</span>
          </div>
          <div className="why__trust-item">
            <span className="why__trust-icon">⭐</span>
            <span>4.9/5 on Google Reviews</span>
          </div>
          <div className="why__trust-item">
            <span className="why__trust-icon">🔒</span>
            <span>100% Secure Booking</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
