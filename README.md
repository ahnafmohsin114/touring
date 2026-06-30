<<<<<<< HEAD
# Devntric Travels & Tours

A complete, production-ready travel agency website built with React (Vite), React Router, Framer Motion, React Icons, Swiper.js, and EmailJS — for **Devntric Travels & Tours**.

© All Rights Reserved DEVNTRIC. Developed by **AHNAF MOHSIN**.

---

## ✨ Features

- 11 fully built pages: Home, About, Services, Tour Packages, Destinations, Gallery, Testimonials, Contact, FAQ, Blog (+ Blog Post detail), 404
- Fully responsive: mobile, tablet, laptop, desktop
- Sticky navbar with dropdown + animated mobile menu
- Hero slider with rotating destinations and live search bar
- 8 unique, fully detailed tour packages (Thailand, Malaysia, Singapore, Dubai, Turkey, Maldives, Cox's Bazar, Sajek Valley) — each with its own itinerary, inclusions/exclusions, pricing, and highlights
- Interactive package detail modal with day-by-day itinerary
- Filterable photo gallery with lightbox preview
- Animated FAQ accordion with category filters
- Contact form wired for EmailJS + WhatsApp floating button + Google Maps embed
- SEO: meta tags, Open Graph tags, structured data (JSON-LD), sitemap.xml, robots.txt
- Framer Motion page transitions, scroll reveals, hover effects throughout
- Every button links to real, meaningful content/pages — no dead links

---

## 🛠 Tech Stack

- React 18 + Vite
- React Router DOM v6
- Framer Motion
- React Icons
- Swiper.js
- EmailJS (`@emailjs/browser`)
- Pure CSS (no Bootstrap/Tailwind), CSS variables for theming

---

## 📦 Installation

```bash
# 1. Extract the zip and move into the project folder
cd devntric-travels

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## 📧 Connecting the Contact Form (EmailJS)

The contact form at `/contact` is wired for EmailJS but needs your credentials to actually send emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service (e.g. Gmail) and an Email Template
3. Open `src/components/Contact/ContactForm.jsx`
4. Replace the placeholder values at the top of the file:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Until configured, the form will simulate a successful submission for demo purposes.

---

## 🗺 Connecting Google Maps

The embedded map on the Contact page uses a placeholder location. To point it at your real office:

1. Go to [Google Maps](https://maps.google.com), search your address
2. Click **Share → Embed a map**, copy the `src` URL
3. Paste it into the `iframe src` in `src/pages/Contact.jsx`

---

## 🏗 Building for Production

```bash
npm run build
```

This generates an optimized static build inside the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deployment Guide

### Deploy to Vercel
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`
4. Click Deploy

### Deploy to Netlify
1. Push this project to GitHub (or drag-and-drop the `dist` folder after building)
2. Go to [netlify.com](https://netlify.com) → Add new site
3. Build command: `npm run build`. Publish directory: `dist`
4. Deploy

### Deploy to your own hosting (cPanel / VPS)
1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your server's public/www directory
3. Ensure your server redirects all routes to `index.html` (SPA fallback) — for Apache, add an `.htaccess`:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📁 Project Structure

```
devntric-travels/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── WhyChooseUs/
│   │   ├── Services/
│   │   ├── Destinations/
│   │   ├── Packages/        (PackageCard)
│   │   ├── Stats/
│   │   ├── Testimonials/
│   │   ├── CTA/
│   │   ├── Gallery/          (GalleryGrid)
│   │   ├── FAQ/               (FAQAccordion)
│   │   ├── Contact/           (ContactForm)
│   │   ├── Footer/
│   │   ├── ScrollToTop/
│   │   └── SEO/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Packages.jsx
│   │   ├── Destinations.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── data.js           (all packages, destinations, testimonials, blog posts, team, FAQs, gallery)
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Brand Colors

| Token | Hex |
|---|---|
| Primary | `#0F172A` |
| Secondary | `#0EA5E9` |
| Accent | `#F59E0B` |
| Background | `#FFFFFF` |

---

## 📝 Notes

- All images are sourced from Unsplash for demo purposes — replace with your own licensed photography before going live.
- Phone numbers, email addresses, and the office address used throughout are placeholders — update them in `src/data/data.js`, `Footer.jsx`, `Navbar.jsx`, and `Contact.jsx`.
- The Google Map embed uses placeholder coordinates — update per the instructions above.
=======
# touring
>>>>>>> 7e2885ad085e1bdf044568bf4e08c4ffe36284a5
