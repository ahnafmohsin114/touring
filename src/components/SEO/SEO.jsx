import { useEffect } from 'react'

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
  }, [title, description, keywords])

  return null
}
