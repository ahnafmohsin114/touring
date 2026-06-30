import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlane, FaPassport, FaMapMarkedAlt, FaHotel, FaBriefcase, FaRing } from 'react-icons/fa'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import CTA from '../components/CTA/CTA'
import './Services.css'

const detailedServices = [
  {
    id: 'flight',
    icon: <FaPlane />,
    title: "Flight Booking",
    tagline: "Best fares, every airline, zero hassle",
    desc: "We compare prices across 200+ airlines in real time to find you the best combination of price, schedule, and comfort. Whether it's a quick domestic hop or a multi-leg international journey, our team handles seat selection, baggage add-ons, and special meal requests so you don't have to.",
    features: [
      "Access to 200+ airlines worldwide",
      "Best price guarantee on every booking",
      "Group booking discounts for 10+ travelers",
      "Free date-change assistance within airline policy",
      "24/7 support for flight delays & cancellations",
      "Special fares for students and corporate travel"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80",
    color: "#0EA5E9"
  },
  {
    id: 'visa',
    icon: <FaPassport />,
    title: "Visa Processing",
    tagline: "94% approval rate across 50+ countries",
    desc: "Visa applications are where most travel plans go wrong. Our dedicated visa team stays current on embassy requirements for over 50 countries, prepares your complete document set, and tracks your application from submission to approval — dramatically reducing the chance of rejection.",
    features: [
      "Tourist, business & student visa processing",
      "Document checklist customized to your destination",
      "Schengen, UK, USA, UAE, Malaysia & more",
      "Application tracking with status updates",
      "Express processing for urgent travel",
      "Interview preparation guidance included"
    ],
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=700&q=80",
    color: "#F59E0B"
  },
  {
    id: 'tour-planning',
    icon: <FaMapMarkedAlt />,
    title: "Tour Planning",
    tagline: "Custom itineraries built around you",
    desc: "No two travelers are the same, so why should every itinerary look identical? Tell us your budget, interests, and travel dates, and our consultants will design a fully custom tour — balancing must-see landmarks with off-the-beaten-path experiences that match your pace and preferences.",
    features: [
      "100% customizable day-by-day itineraries",
      "Solo, couple, family & group planning",
      "Local guide arrangements included",
      "Activity & excursion bookings handled",
      "Dietary & accessibility accommodations",
      "Real-time itinerary adjustments while traveling"
    ],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80",
    color: "#10B981"
  },
  {
    id: 'hotel',
    icon: <FaHotel />,
    title: "Hotel Booking",
    tagline: "From budget stays to 5-star luxury resorts",
    desc: "We maintain direct partnerships with hundreds of hotels and resorts globally, allowing us to negotiate rates and amenities you won't find on public booking sites. From a cozy guesthouse in Sajek to an overwater villa in the Maldives, we match the stay to your trip.",
    features: [
      "Direct hotel contracts for better rates",
      "Budget, mid-range & luxury options",
      "Free cancellation on select properties",
      "Room upgrade requests on special occasions",
      "Verified reviews and photo galleries",
      "Group accommodation blocks for events"
    ],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=80",
    color: "#8B5CF6"
  },
  {
    id: 'corporate',
    icon: <FaBriefcase />,
    title: "Corporate Travel",
    tagline: "Dedicated account management for businesses",
    desc: "We partner with companies of all sizes to manage their business travel needs — from individual executive trips to full conference logistics for 100+ attendees. Our corporate clients get a dedicated account manager, consolidated billing, and detailed expense reporting.",
    features: [
      "Dedicated corporate account manager",
      "Consolidated monthly invoicing available",
      "Conference & event logistics coordination",
      "Travel policy compliance management",
      "Detailed expense reporting & analytics",
      "24/7 emergency travel assistance hotline"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
    color: "#F97316"
  },
  {
    id: 'honeymoon',
    icon: <FaRing />,
    title: "Honeymoon Packages",
    tagline: "Romantic getaways crafted for two",
    desc: "Your honeymoon deserves more than a generic package. We design intimate, romance-focused itineraries — private dinners, couple's spa sessions, surprise room decorations — for destinations like the Maldives, Bali, and Europe, ensuring every detail says 'just for you two.'",
    features: [
      "Romantic room setups & surprise arrangements",
      "Private candlelit dinner reservations",
      "Couple's spa & wellness sessions",
      "Overwater bungalow & villa options",
      "Photography session add-ons available",
      "Anniversary & special occasion packages"
    ],
    image: "https://images.unsplash.com/photo-1465778893808-9b25cdde3d12?w=700&q=80",
    color: "#EF4444"
  }
]

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Our Services | Devntric Travels & Tours"
        description="Explore Devntric Travels & Tours' full range of services: flight booking, visa processing, tour planning, hotel booking, corporate travel, and honeymoon packages."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Our Services</span>
          <h1>Comprehensive Travel Services, All in One Place</h1>
          <p>From a single visa application to a complete world tour — we've got every part of your journey covered.</p>
        </div>
      </section>

      {detailedServices.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section service-detail ${i % 2 === 1 ? 'service-detail--reverse' : ''}`}
          style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)' }}
        >
          <div className="container service-detail__inner">
            <motion.div
              className="service-detail__image"
              initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <img src={service.image} alt={service.title} />
            </motion.div>

            <motion.div
              className="service-detail__content"
              initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-detail__icon" style={{ '--svc-color': service.color }}>
                {service.icon}
              </div>
              <span className="service-detail__tagline">{service.tagline}</span>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <ul className="service-detail__features">
                {service.features.map((feat, j) => (
                  <li key={j}><FiCheck style={{ color: service.color }} /> {feat}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Get a Quote for This Service <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      <CTA />
    </motion.div>
  )
}
