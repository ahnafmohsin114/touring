import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import SEO from '../components/SEO/SEO'
import ContactForm from '../components/Contact/ContactForm'
import './Contact.css'

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Visit Our Office",
    lines: ["House 12, Road 5, Banani", "Dhaka 1213, Bangladesh"],
    color: "#0EA5E9"
  },
  {
    icon: <FiPhone />,
    title: "Call Us",
    lines: ["+880-1700-000000", "+880-2-9876543"],
    color: "#10B981"
  },
  {
    icon: <FiMail />,
    title: "Email Us",
    lines: ["info@devntrictravels.com", "support@devntrictravels.com"],
    color: "#F59E0B"
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    lines: ["Saturday – Thursday", "9:00 AM – 8:00 PM"],
    color: "#8B5CF6"
  }
]

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Contact Us | Devntric Travels & Tours"
        description="Get in touch with Devntric Travels & Tours. Call, WhatsApp, email, or visit our Dhaka office to start planning your next journey."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Contact Us</span>
          <h1>Let's Start Planning Your Trip</h1>
          <p>Have a question or ready to book? Our team is here to help — reach out any way that's convenient for you.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-sm">
        <div className="container">
          <div className="contact__info-grid">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="contact__info-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="contact__info-icon" style={{ '--info-color': info.color }}>{info.icon}</div>
                <h4>{info.title}</h4>
                {info.lines.map((line, j) => <p key={j}>{line}</p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container contact__layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="contact__side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801700000000?text=Hello%20Devntric%20Travels!%20I%20want%20to%20book%20a%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp-card"
            >
              <div className="contact__whatsapp-icon"><FaWhatsapp /></div>
              <div>
                <h4>Chat With Us on WhatsApp</h4>
                <p>Get instant answers from our travel consultants</p>
              </div>
            </a>

            {/* Map */}
            <div className="contact__map">
              <iframe
                title="Devntric Travels & Tours Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.913!2d90.4023!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnMDguMyJF!5e0!3m2!1sen!2sbd!4v1600000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social */}
            <div className="contact__social-card">
              <h4>Follow Us</h4>
              <div className="contact__social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
