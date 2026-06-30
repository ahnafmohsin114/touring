import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import './ContactForm.css'

// Replace these with your actual EmailJS credentials.
// Sign up free at https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const interestOptions = [
  'General Inquiry',
  'Thailand Package',
  'Malaysia Package',
  'Singapore Package',
  'Dubai Package',
  'Turkey Package',
  'Maldives Package',
  "Cox's Bazar Package",
  'Sajek Valley Package',
  'Visa Processing',
  'Flight Booking',
  'Corporate Travel',
  'Honeymoon Package',
  'Custom Tour Request'
]

export default function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', interest: 'General Inquiry', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // EmailJS not configured yet — simulate success for demo purposes.
        await new Promise(resolve => setTimeout(resolve, 1200))
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry', message: '' })
        return
      }

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="contact-form">
      <h3 className="contact-form__title">Send Us a Message</h3>
      <p className="contact-form__subtitle">
        Fill out the form below and our travel experts will get back to you within 2 hours during business hours.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text" id="name" name="name" required
              placeholder="Enter your full name"
              value={formData.name} onChange={handleChange}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email" id="email" name="email" required
              placeholder="you@example.com"
              value={formData.email} onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel" id="phone" name="phone" required
              placeholder="+880 1XXX-XXXXXX"
              value={formData.phone} onChange={handleChange}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="interest">I'm Interested In *</label>
            <select id="interest" name="interest" required value={formData.interest} onChange={handleChange}>
              {interestOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message" name="message" rows="5" required
            placeholder="Tell us about your travel plans, preferred dates, group size, or any questions you have..."
            value={formData.message} onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg contact-form__submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : <>Send Message <FiSend /></>}
        </button>

        {status === 'success' && (
          <motion.div
            className="contact-form__alert contact-form__alert--success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FiCheckCircle />
            Thank you! Your message has been sent. Our team will contact you within 2 hours.
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className="contact-form__alert contact-form__alert--error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FiAlertCircle />
            Something went wrong. Please try again or call us directly at +880-1700-000000.
          </motion.div>
        )}
      </form>
    </div>
  )
}
