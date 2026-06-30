import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import { galleryImages } from '../../data/data'
import './GalleryGrid.css'

const categories = ['All', ...new Set(galleryImages.map(img => img.category))]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex((lightboxIndex + 1) % filtered.length)
  const prevImage = () => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)

  return (
    <div className="gallery-grid">
      {/* Filter */}
      <div className="gallery-grid__filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`gallery-grid__filter ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div className="gallery-grid__items" layout>
        <AnimatePresence>
          {filtered.map((img, idx) => (
            <motion.div
              key={img.id}
              className="gallery-grid__item"
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-grid__overlay">
                <FiZoomIn />
                <h4>{img.title}</h4>
                <span>{img.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close gallery preview">
              <FiX />
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
            <motion.div
              className="lightbox__content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].title} />
              <div className="lightbox__caption">
                <h4>{filtered[lightboxIndex].title}</h4>
                <span>{filtered[lightboxIndex].category}</span>
              </div>
            </motion.div>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
