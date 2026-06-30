import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import Hero from '../components/Hero/Hero'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Services from '../components/Services/Services'
import Destinations from '../components/Destinations/Destinations'
import Stats from '../components/Stats/Stats'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import PackageCard from '../components/Packages/PackageCard'
import { packages } from '../data/data'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 }
}

export default function Home() {
  const featured = packages.filter(p => p.featured).slice(0, 6)

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <SEO
        title="Devntric Travels & Tours | Premium Travel Agency in Bangladesh"
        description="Devntric Travels & Tours — Bangladesh's premier travel agency offering international tour packages, visa processing, flight booking, hotel reservations, and corporate travel."
        keywords="travel agency Bangladesh, visa processing, international tour packages, flight booking"
      />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Destinations limit={8} />

      {/* Featured Packages */}
      <section className="featured-packages section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Featured Packages</span>
            <h2 className="section-title">Our Most Loved <span>Tour Packages</span></h2>
            <p className="section-subtitle">
              Hand-picked itineraries combining the best value, unforgettable experiences, and seamless logistics.
            </p>
          </motion.div>

          <div className="grid-3">
            {featured.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/packages" className="btn btn-outline-dark btn-lg">
              View All Packages <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials limit={6} />
      <CTA />
    </motion.div>
  )
}
