import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import './FAQAccordion.css'

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <div key={item.id} className={`faq-accordion__item ${openId === item.id ? 'open' : ''}`}>
          <button
            className="faq-accordion__question"
            onClick={() => toggle(item.id)}
            aria-expanded={openId === item.id}
          >
            <span className="faq-accordion__category">{item.category}</span>
            <span className="faq-accordion__question-text">{item.question}</span>
            <FiChevronDown className="faq-accordion__icon" />
          </button>
          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                className="faq-accordion__answer-wrap"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="faq-accordion__answer">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
