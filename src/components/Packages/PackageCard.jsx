import React from 'react'
import { Link } from 'react-router-dom'
import { FiClock, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'
import './PackageCard.css'

export default function PackageCard({ pkg, compact = false }) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)

  return (
    <div className={`pkg-card ${compact ? 'pkg-card--compact' : ''}`}>
      <div className="pkg-card__image-wrap">
        <img src={pkg.image} alt={pkg.title} className="pkg-card__image" loading="lazy" />
        <div className="pkg-card__overlay" />
        {pkg.badge && (
          <span className={`pkg-card__badge pkg-card__badge--${pkg.badgeColor}`}>
            {pkg.badge}
          </span>
        )}
        <span className="pkg-card__discount">-{discount}% OFF</span>
        <div className="pkg-card__destination">
          <span>📍</span> {pkg.destination}
        </div>
      </div>

      <div className="pkg-card__body">
        <div className="pkg-card__meta">
          <span className="pkg-card__duration">
            <FiClock /> {pkg.duration}
          </span>
          <span className="pkg-card__group">
            <FiUsers /> {pkg.groupSize}
          </span>
        </div>

        <h3 className="pkg-card__title">{pkg.title}</h3>
        <p className="pkg-card__subtitle">{pkg.subtitle}</p>

        <div className="pkg-card__rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < Math.floor(pkg.rating) ? '#F59E0B' : '#CBD5E1' }}>★</span>
            ))}
          </div>
          <span className="pkg-card__rating-num">{pkg.rating}</span>
          <span className="pkg-card__reviews">({pkg.reviews} reviews)</span>
        </div>

        {!compact && (
          <ul className="pkg-card__includes">
            {pkg.includes.slice(0, 4).map((item, i) => (
              <li key={i}>
                <FaCheckCircle className="pkg-card__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pkg-card__footer">
          <div className="pkg-card__price">
            <span className="pkg-card__price-label">From</span>
            <span className="pkg-card__price-amount">৳{pkg.price.toLocaleString()}</span>
            <span className="pkg-card__price-original">৳{pkg.originalPrice.toLocaleString()}</span>
          </div>
          <Link
            to={`/packages#${pkg.slug}`}
            className="btn btn-primary btn-sm"
            onClick={() => window.scrollTo(0, 0)}
          >
            Book Now <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
