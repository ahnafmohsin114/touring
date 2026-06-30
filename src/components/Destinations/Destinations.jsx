import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import { destinations } from '../../data/data'
import 'swiper/css'
import 'swiper/css/navigation'
import './Destinations.css'

export default function Destinations({ limit }) {
  const data = limit ? destinations.slice(0, limit) : destinations

  return (
    <section className="destinations section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Popular Destinations</span>
          <h2 className="section-title">Where Will You Go <span>Next?</span></h2>
          <p className="section-subtitle">
            From tropical islands to ancient cities — explore our most-loved destinations handpicked for unforgettable journeys.
          </p>
        </motion.div>
      </div>

      <div className="destinations__slider-wrap">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5 }
          }}
          className="destinations__swiper"
        >
          {data.map((dest) => (
            <SwiperSlide key={dest.id}>
              <Link to={`/packages?dest=${dest.name.toLowerCase()}`} className="dest-card">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="dest-card__overlay" />
                <div className="dest-card__content">
                  <span className="dest-card__flag">{dest.flag}</span>
                  <h3>{dest.name}</h3>
                  <p><FiMapPin /> {dest.country}</p>
                  <span className="dest-card__tours">{dest.tours} Tour Packages</span>
                  <span className="dest-card__cta">Explore <FiArrowRight /></span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="destinations__footer">
          <Link to="/destinations" className="btn btn-outline-dark">
            View All Destinations <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
