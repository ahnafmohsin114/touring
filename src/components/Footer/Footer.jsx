import React from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPlane } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div>
            <h3>Get Exclusive Travel Deals</h3>
            <p>Subscribe to our newsletter and be the first to know about special offers and new destinations.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required aria-label="Email address" />
            <button type="submit" className="btn btn-accent">
              Subscribe <FiArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__main">
        {/* Brand */}
        <div className="footer__col footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon"><FaPlane /></div>
            <div>
              <span className="footer__logo-name">Devntric</span>
              <span className="footer__logo-sub">Travels & Tours</span>
            </div>
          </Link>
          <p className="footer__about">
            Bangladesh's trusted travel partner since 2016. We turn travel dreams into unforgettable journeys — one trip at a time.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Travel Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services#flight">Flight Booking</Link></li>
            <li><Link to="/services#visa">Visa Processing</Link></li>
            <li><Link to="/services#hotel">Hotel Reservation</Link></li>
            <li><Link to="/services#corporate">Corporate Travel</Link></li>
            <li><Link to="/services#honeymoon">Honeymoon Packages</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4>Get In Touch</h4>
          <ul className="footer__contact">
            <li>
              <FiMapPin />
              <span>House 12, Road 5, Banani, Dhaka 1213, Bangladesh</span>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+8801700000000">+880-1700-000000</a>
            </li>
            <li>
              <FiMail />
              <a href="mailto:info@devntrictravels.com">info@devntrictravels.com</a>
            </li>
            <li>
              <FiClock />
              <span>Sat–Thu: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} All Rights Reserved — <strong>DEVNTRIC</strong> Travels & Tours.</p>
          <p className="footer__credit">Developed by <strong>AHNAF MOHSIN</strong></p>
          <div className="footer__bottom-links">
            <Link to="/faq">Privacy Policy</Link>
            <span>•</span>
            <Link to="/faq">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
