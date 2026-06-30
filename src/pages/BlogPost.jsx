import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight, FiTag } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import SEO from '../components/SEO/SEO'
import CTA from '../components/CTA/CTA'
import { blogPosts } from '../data/data'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)
  const otherPosts = related.length > 0 ? related : blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-wrapper">
      <SEO title={`${post.title} | Devntric Travels Blog`} description={post.excerpt} />

      <article className="blogpost">
        <div className="blogpost__hero">
          <img src={post.image} alt={post.title} />
          <div className="blogpost__hero-overlay" />
          <div className="container blogpost__hero-content">
            <Link to="/blog" className="blogpost__back"><FiArrowLeft /> Back to Blog</Link>
            <span className="badge badge-accent">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blogpost__meta">
              <img src={post.authorAvatar} alt={post.author} />
              <div>
                <strong>{post.author}</strong>
                <span>{post.authorRole}</span>
              </div>
              <span className="blogpost__meta-divider" />
              <span><FiCalendar /> {post.date}</span>
              <span><FiClock /> {post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="container blogpost__layout">
          <div className="blogpost__content">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.includes('**\n')) {
                const [heading, ...body] = para.split('\n')
                return (
                  <React.Fragment key={i}>
                    <h3>{heading.replace(/\*\*/g, '')}</h3>
                    <p>{body.join(' ')}</p>
                  </React.Fragment>
                )
              }
              if (para.startsWith('**')) {
                return <h3 key={i}>{para.replace(/\*\*/g, '')}</h3>
              }
              if (para.match(/^\d\.\s/) || para.startsWith('-')) {
                const items = para.split('\n')
                return (
                  <ul key={i} className="blogpost__list">
                    {items.map((item, j) => <li key={j}>{item.replace(/^-\s*/, '').replace(/^\d\.\s*/, '')}</li>)}
                  </ul>
                )
              }
              return <p key={i}>{para}</p>
            })}

            <div className="blogpost__tags">
              {post.tags.map((tag, i) => (
                <span key={i}><FiTag /> {tag}</span>
              ))}
            </div>

            <div className="blogpost__share">
              <span>Share this article:</span>
              <div className="blogpost__share-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><FaLinkedinIn /></a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blogpost__sidebar">
            <div className="blogpost__author-card">
              <img src={post.authorAvatar} alt={post.author} />
              <h4>{post.author}</h4>
              <span>{post.authorRole}</span>
              <p>Travel expert at Devntric Travels & Tours, helping travelers plan unforgettable journeys.</p>
            </div>

            <div className="blogpost__cta-card">
              <h4>Ready to Book This Trip?</h4>
              <p>Let our experts turn this guide into your personalized itinerary.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Free Quote
              </Link>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        <div className="container">
          <div className="blogpost__related">
            <h3>Related Articles</h3>
            <div className="blogpost__related-grid">
              {otherPosts.map(p => (
                <Link to={`/blog/${p.slug}`} key={p.id} className="blogpost__related-card">
                  <img src={p.image} alt={p.title} />
                  <div>
                    <span className="badge badge-secondary">{p.category}</span>
                    <h4>{p.title}</h4>
                    <span className="blogpost__related-link">Read More <FiArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </motion.div>
  )
}
