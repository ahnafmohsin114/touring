import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi'
import { FaPlane } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  {
    label: 'Packages', path: '/packages',
    dropdown: [
      { label: 'All Packages', path: '/packages' },
      { label: 'International Tours', path: '/packages?cat=international' },
      { label: 'Domestic Tours', path: '/packages?cat=domestic' },
      { label: 'Honeymoon Packages', path: '/packages?cat=honeymoon' },
    ]
  },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = location.pathname === '/'

  return (
    <>
      <nav className={`navbar ${scrolled || !isHome ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <FaPlane />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Devntric</span>
              <span className="navbar__logo-sub">Travels & Tours</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="navbar__item"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  {link.dropdown && <FiChevronDown className="navbar__chevron" />}
                </NavLink>
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.ul
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.path}>
                            <Link to={item.path} className="navbar__dropdown-link">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__cta">
            <a href="tel:+8801700000000" className="navbar__phone">
              <FiPhone /> <span>+880-1700-000000</span>
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="navbar__mobile-header">
                <Link to="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
                  <div className="navbar__logo-icon">
                    <FaPlane />
                  </div>
                  <div className="navbar__logo-text">
                    <span className="navbar__logo-name">Devntric</span>
                    <span className="navbar__logo-sub">Travels & Tours</span>
                  </div>
                </Link>
                <button className="navbar__toggle" onClick={() => setMobileOpen(false)}>
                  <FiX />
                </button>
              </div>

              <ul className="navbar__mobile-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    {link.dropdown ? (
                      <div className="navbar__mobile-group">
                        <button
                          className="navbar__mobile-link navbar__mobile-toggle"
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        >
                          {link.label}
                          <FiChevronDown className={activeDropdown === link.label ? 'rotated' : ''} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.ul
                              className="navbar__mobile-sub"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                            >
                              {link.dropdown.map((item) => (
                                <li key={item.path}>
                                  <Link to={item.path} className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => `navbar__mobile-link ${isActive ? 'active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <div className="navbar__mobile-footer">
                <a href="tel:+8801700000000" className="navbar__mobile-phone">
                  <FiPhone /> +880-1700-000000
                </a>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  Book a Tour Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/8801700000000?text=Hello%20Devntric%20Travels!%20I%20want%20to%20book%20a%20tour."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  )
}
