import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FaPlane, FaPassport, FaHotel, FaMapMarkedAlt, FaGlobe, FaBriefcase, FaRing, FaUmbrella } from 'react-icons/fa'
import './Services.css'

const services = [
  {
    icon: <FaPlane />,
    title: "Flight Booking",
    desc: "Domestic and international flights at the best fares. We compare 200+ airlines to find you the perfect route and price.",
    features: ["Best fare guarantee", "All airlines covered", "Group discounts available", "24/7 booking support"],
    link: "/services#flight",
    color: "#0EA5E9"
  },
  {
    icon: <FaPassport />,
    title: "Visa Processing",
    desc: "Expert visa assistance for 50+ countries. Our 94% approval rate is built on meticulous document preparation and deep embassy knowledge.",
    features: ["50+ countries covered", "Document checklist provided", "Application tracking", "Express processing option"],
    link: "/services#visa",
    color: "#F59E0B"
  },
  {
    icon: <FaHotel />,
    title: "Hotel Reservation",
    desc: "From budget guesthouses to 5-star luxury resorts — we negotiate the best rates and ensure your accommodation matches your expectations.",
    features: ["Budget to luxury options", "Direct hotel contracts", "Free cancellation options", "Special upgrade requests"],
    link: "/services#hotel",
    color: "#10B981"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Domestic Tours",
    desc: "Rediscover Bangladesh — Cox's Bazar, Sajek Valley, Sundarbans, Sylhet, and more. Curated local experiences you won't find elsewhere.",
    features: ["Expert local guides", "Private transport", "Authentic experiences", "Weekend getaways available"],
    link: "/services#domestic",
    color: "#8B5CF6"
  },
  {
    icon: <FaGlobe />,
    title: "International Tours",
    desc: "Fully organized international tours to 50+ destinations. Flights, hotels, transfers, guides — everything handled in one seamless package.",
    features: ["All-inclusive packages", "Small group tours", "Custom itineraries", "Halal-friendly options"],
    link: "/services#international",
    color: "#EC4899"
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Travel",
    desc: "Streamline business travel for your team. We manage end-to-end corporate travel with dedicated account management and cost control.",
    features: ["Dedicated account manager", "Expense reporting", "24/7 emergency support", "Volume discounts"],
    link: "/services#corporate",
    color: "#F97316"
  },
  {
    icon: <FaRing />,
    title: "Honeymoon Packages",
    desc: "Craft your perfect start to forever. Our romantic getaways to Maldives, Bali, and Europe are designed exclusively for couples.",
    features: ["Romantic setup included", "Overwater bungalows", "Couple's spa sessions", "Surprise arrangements"],
    link: "/services#honeymoon",
    color: "#EF4444"
  },
  {
    icon: <FaUmbrella />,
    title: "Travel Insurance",
    desc: "Travel with complete peace of mind. Our comprehensive insurance covers medical, cancellation, lost baggage, and more.",
    features: ["Medical coverage up to $50K", "Trip cancellation cover", "Lost baggage protection", "Emergency evacuation"],
    link: "/services#insurance",
    color: "#06B6D4"
  }
]

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Everything You Need to <span>Travel Better</span></h2>
          <p className="section-subtitle">
            From a single visa application to a complete world tour — we offer comprehensive travel services tailored to your needs.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="services__icon" style={{ '--svc-color': service.color }}>
                {service.icon}
              </div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.desc}</p>
              <ul className="services__features">
                {service.features.map((feat, j) => (
                  <li key={j}>
                    <span className="services__check" style={{ color: service.color }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to={service.link} className="services__link" style={{ '--svc-color': service.color }}>
                Learn More <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
