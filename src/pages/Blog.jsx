import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi'
import SEO from '../components/SEO/SEO'
import { blogPosts } from '../data/data'
import './Blog.css'

const categories = ['All', ...new Set(blogPosts.map(p => p.category))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const featured = blogPosts.find(p => p.featured)
  const rest = blogPosts.filter(p => p.id !== featured?.id)
  const filtered = activeCategory === 'All' ? rest : rest.filter(p => p.category === activeCategory)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO
        title="Travel Blog | Devntric Travels & Tours"
        description="Travel tips, visa guides, and destination articles from Devntric Travels & Tours — your resource for smarter, better travel."
      />

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow">Travel Blog</span>
          <h1>Travel Tips, Guides & Inspiration</h1>
          <p>Insights from our travel experts to help you plan smarter, save money, and travel with confidence.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <motion.div
              className="blog__featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="blog__featured-image">
                <img src={featured.image} alt={featured.title} />
                <span className="blog__featured-tag">Featured</span>
              </div>
              <div className="blog__featured-content">
                <span className="badge badge-secondary">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="blog__meta">
                  <img src={featured.authorAvatar} alt={featured.author} />
                  <div>
                    <strong>{featured.author}</strong>
                    <span>{featured.date} · {featured.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featured.slug}`} className="btn btn-primary">
                  Read Full Article <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Filters */}
          <div className="blog__filters">
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
          <div className="blog__grid">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                className="blog__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link to={`/blog/${post.slug}`} className="blog__card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="badge badge-accent blog__card-category">{post.category}</span>
                </Link>
                <div className="blog__card-body">
                  <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <div className="blog__card-footer">
                    <span><FiCalendar /> {post.date}</span>
                    <span><FiClock /> {post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
