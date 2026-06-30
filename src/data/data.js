export const packages = [
  {
    id: 1,
    slug: "thailand-essence",
    destination: "Thailand",
    title: "Thailand Essence Tour",
    subtitle: "Bangkok • Chiang Mai • Phuket",
    duration: "7 Days / 6 Nights",
    price: 45000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
    badge: "Best Seller",
    badgeColor: "accent",
    rating: 4.9,
    reviews: 214,
    groupSize: "2–12 Persons",
    includes: [
      "Return air tickets from Dhaka",
      "5-star hotel accommodation",
      "Daily breakfast & 3 dinners",
      "Bangkok city tour & Grand Palace",
      "Phi Phi Island speedboat excursion",
      "Elephant sanctuary visit in Chiang Mai",
      "Visa assistance & airport transfers",
      "24/7 dedicated tour guide"
    ],
    excludes: ["Personal expenses", "Travel insurance", "Lunch meals"],
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", desc: "Welcome to Bangkok. Transfer to hotel, evening Chao Phraya river cruise." },
      { day: 2, title: "Bangkok City & Grand Palace", desc: "Full-day sightseeing: Grand Palace, Wat Pho reclining Buddha, Khao San Road night market." },
      { day: 3, title: "Flight to Chiang Mai", desc: "Morning flight, afternoon Elephant Nature Park, evening Lanna Temple complex tour." },
      { day: 4, title: "Doi Inthanon & Hill Tribes", desc: "Doi Inthanon National Park, Royal Twin Pagodas, traditional hill tribe village visit." },
      { day: 5, title: "Flight to Phuket", desc: "Transfer to Phuket, afternoon beach leisure, Patong Beach evening market." },
      { day: 6, title: "Phi Phi Islands Speedboat", desc: "Full-day Phi Phi Island tour with snorkeling, Maya Bay, Viking Cave." },
      { day: 7, title: "Departure Day", desc: "Morning at leisure, airport transfer, fly back to Dhaka." }
    ],
    highlights: ["Thai street food experiences", "Full-moon beach party option", "Traditional Thai massage session"],
    category: "international",
    featured: true
  },
  {
    id: 2,
    slug: "malaysia-discovery",
    destination: "Malaysia",
    title: "Malaysia Discovery Package",
    subtitle: "Kuala Lumpur • Langkawi • Cameron Highlands",
    duration: "6 Days / 5 Nights",
    price: 38000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    badge: "Popular",
    badgeColor: "secondary",
    rating: 4.8,
    reviews: 178,
    groupSize: "2–15 Persons",
    includes: [
      "Return flights from Dhaka",
      "4-star hotel stays",
      "Daily breakfast included",
      "Petronas Twin Towers visit",
      "Langkawi cable car & Eagle Square",
      "Cameron Highlands tea plantation tour",
      "Batu Caves guided visit",
      "All airport & hotel transfers"
    ],
    excludes: ["Lunch & dinner (except specified)", "Personal shopping", "Optional activities"],
    itinerary: [
      { day: 1, title: "Arrive Kuala Lumpur", desc: "Airport pickup, check-in to KLCC-area hotel, evening Bukit Bintang food street." },
      { day: 2, title: "KL City & Twin Towers", desc: "Petronas Twin Towers Skybridge, KL Tower, Merdeka Square, Central Market." },
      { day: 3, title: "Batu Caves & Genting", desc: "Morning Batu Caves temple climb, afternoon Genting Highlands cable car." },
      { day: 4, title: "Cameron Highlands", desc: "Scenic drive, BOH Tea Estate, strawberry farm, Mossy Forest walk." },
      { day: 5, title: "Langkawi Island", desc: "Flight to Langkawi, cable car to Mat Cincang Peak, Eagle Square, Cenang Beach." },
      { day: 6, title: "Return to Dhaka", desc: "Morning island breakfast, transfer to Langkawi Airport, connect to Dhaka." }
    ],
    highlights: ["Halal food throughout the tour", "Muslim-friendly itinerary", "KLCC Aquarium optional add-on"],
    category: "international",
    featured: true
  },
  {
    id: 3,
    slug: "singapore-city-state",
    destination: "Singapore",
    title: "Singapore City State Adventure",
    subtitle: "Marina Bay • Sentosa • Gardens by the Bay",
    duration: "5 Days / 4 Nights",
    price: 52000,
    originalPrice: 64000,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    badge: "Premium",
    badgeColor: "accent",
    rating: 4.9,
    reviews: 143,
    groupSize: "2–10 Persons",
    includes: [
      "Return flights from Dhaka",
      "5-star Marina Bay area hotel",
      "Daily breakfast & 2 special dinners",
      "Universal Studios Singapore tickets",
      "Gardens by the Bay with Cloud Forest",
      "Marina Bay Sands SkyPark access",
      "Sentosa Island full-day pass",
      "Singapore city hop-on hop-off bus"
    ],
    excludes: ["Singapore EZ-Link card", "Optional cruise", "Souvenirs"],
    itinerary: [
      { day: 1, title: "Touchdown Singapore", desc: "Changi Airport arrival — voted world's best. Check-in, evening Clarke Quay waterfront dinner." },
      { day: 2, title: "Marina Bay & Supertrees", desc: "Merlion Park, Marina Bay Sands, ArtScience Museum, Gardens by the Bay night show." },
      { day: 3, title: "Universal Studios", desc: "Full day at Universal Studios Singapore, evening Resorts World Sentosa." },
      { day: 4, title: "Chinatown, Little India & Orchard", desc: "Cultural heritage trail, hawker centre lunch, Orchard Road shopping evening." },
      { day: 5, title: "Departure", desc: "Changi Jewel waterfall visit before flight, return to Dhaka." }
    ],
    highlights: ["World's best airport (Changi Jewel)", "Night safari optional add-on", "MRT day pass included"],
    category: "international",
    featured: true
  },
  {
    id: 4,
    slug: "dubai-luxury",
    destination: "Dubai",
    title: "Dubai Luxury Escape",
    subtitle: "Downtown • Palm Jumeirah • Desert Safari",
    duration: "6 Days / 5 Nights",
    price: 68000,
    originalPrice: 82000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    badge: "Luxury",
    badgeColor: "accent",
    rating: 5.0,
    reviews: 96,
    groupSize: "2–8 Persons",
    includes: [
      "Return Emirates/Biman flights",
      "5-star Downtown Dubai hotel",
      "Burj Khalifa At-the-Top tickets",
      "Dubai Frame & Blue Mosque",
      "Evening Desert Safari with BBQ dinner",
      "Dhow cruise dinner on Dubai Creek",
      "Full-day Abu Dhabi city tour",
      "Premium airport transfers"
    ],
    excludes: ["Dubai Aquarium (optional)", "Helicopter tour", "Ski Dubai"],
    itinerary: [
      { day: 1, title: "Welcome to Dubai", desc: "5-star hotel check-in, evening walk at Dubai Marina, dinner at The Beach JBR." },
      { day: 2, title: "Downtown & Burj Khalifa", desc: "Burj Khalifa 124th floor sunrise visit, Dubai Mall, Dubai Fountain evening show." },
      { day: 3, title: "Desert Safari", desc: "Afternoon dune bashing, camel ride, henna tattoo, belly dance, BBQ under the stars." },
      { day: 4, title: "Abu Dhabi Day Trip", desc: "Sheikh Zayed Grand Mosque (stunning!), Ferrari World, Heritage Village." },
      { day: 5, title: "Gold Souk & Palm Jumeirah", desc: "Morning Gold/Spice Souk, Atlantis the Palm, Dhow dinner cruise on Creek." },
      { day: 6, title: "Shopping & Departure", desc: "Duty-free at Dubai Mall, airport transfer for evening flight home." }
    ],
    highlights: ["Halal-certified restaurant options", "Shopping festival timing available", "Dubai Frame 360° views"],
    category: "international",
    featured: true
  },
  {
    id: 5,
    slug: "turkey-heritage",
    destination: "Turkey",
    title: "Turkey Heritage & Culture Tour",
    subtitle: "Istanbul • Cappadocia • Antalya",
    duration: "9 Days / 8 Nights",
    price: 85000,
    originalPrice: 102000,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    badge: "Heritage",
    badgeColor: "secondary",
    rating: 4.9,
    reviews: 122,
    groupSize: "4–16 Persons",
    includes: [
      "Return Turkish Airlines flights",
      "Hand-picked boutique hotels",
      "Daily Turkish breakfast",
      "Hot air balloon ride in Cappadocia",
      "Hagia Sophia & Blue Mosque guided tour",
      "Ephesus ancient ruins excursion",
      "Bosphorus sunset cruise",
      "Pamukkale thermal pools visit"
    ],
    excludes: ["Hammam spa (optional)", "Personal shopping", "Turkish delight purchases"],
    itinerary: [
      { day: 1, title: "Arrive Istanbul", desc: "Grand Bazaar evening stroll, traditional kebab dinner in Sultanahmet." },
      { day: 2, title: "Istanbul Wonders", desc: "Hagia Sophia, Blue Mosque, Topkapi Palace, Spice Bazaar, Bosphorus cruise." },
      { day: 3, title: "Dolmabahçe & Asian Side", desc: "Dolmabahçe Palace, ferry to Kadıköy Asian side, street food tour." },
      { day: 4, title: "Fly to Cappadocia", desc: "Arrive Kayseri, transfer to Göreme, Uchisar Castle sunset." },
      { day: 5, title: "Hot Air Balloon at Dawn", desc: "6am balloon flight over fairy chimneys, afternoon open-air museum & underground city." },
      { day: 6, title: "Drive to Antalya via Konya", desc: "Mevlana Museum in Konya, scenic Taurus Mountain road to Antalya." },
      { day: 7, title: "Perge & Side Ruins", desc: "Ancient Perge city, Side Theater & Apollo Temple, Manavgat waterfall." },
      { day: 8, title: "Pamukkale & Hierapolis", desc: "Cotton Castle thermal terraces, UNESCO Hierapolis ancient city." },
      { day: 9, title: "Departure from Istanbul", desc: "Domestic flight to Istanbul, international flight home to Dhaka." }
    ],
    highlights: ["Two UNESCO World Heritage Sites", "Whirling Dervishes show option", "Traditional pottery workshop"],
    category: "international",
    featured: false
  },
  {
    id: 6,
    slug: "maldives-paradise",
    destination: "Maldives",
    title: "Maldives Paradise Retreat",
    subtitle: "Malé • Overwater Bungalow • Snorkeling",
    duration: "5 Days / 4 Nights",
    price: 95000,
    originalPrice: 115000,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    badge: "Honeymoon Pick",
    badgeColor: "accent",
    rating: 5.0,
    reviews: 87,
    groupSize: "2 Persons (Couples)",
    includes: [
      "Return flights (Dhaka–Malé)",
      "Overwater villa accommodation",
      "Full-board meals (all included)",
      "Speedboat private transfers",
      "Sunset dolphin watching cruise",
      "Guided reef snorkeling sessions",
      "Couple's spa session (60 min)",
      "Underwater restaurant dinner"
    ],
    excludes: ["Scuba diving certification", "Seaplane upgrades", "Extra spa treatments"],
    itinerary: [
      { day: 1, title: "Arrive in Paradise", desc: "Malé arrival, speedboat to resort, welcome cocktail, sunset from your deck." },
      { day: 2, title: "Reef Snorkeling Day", desc: "Morning guided reef snorkeling, afternoon kayaking, evening beachside dinner." },
      { day: 3, title: "Dolphin Cruise & Spa", desc: "Sunrise yoga, dolphin watching sunset cruise, couple's spa treatment." },
      { day: 4, title: "Local Island & Fishing", desc: "Local island excursion, traditional Maldivian fishing by night." },
      { day: 5, title: "Leisurely Departure", desc: "Final beach morning, underwater restaurant farewell lunch, speedboat to Malé airport." }
    ],
    highlights: ["Private overwater bungalow", "Bioluminescent beach nights", "Personalized honeymoon setup"],
    category: "honeymoon",
    featured: true
  },
  {
    id: 7,
    slug: "coxs-bazar-beach",
    destination: "Cox's Bazar",
    title: "Cox's Bazar Beach Holiday",
    subtitle: "World's Longest Sea Beach • Inani • Himchari",
    duration: "3 Days / 2 Nights",
    price: 6500,
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    badge: "Local Favorite",
    badgeColor: "secondary",
    rating: 4.7,
    reviews: 389,
    groupSize: "2–20 Persons",
    includes: [
      "AC bus/train transfer from Dhaka",
      "Comfortable hotel accommodation",
      "Daily breakfast & dinner",
      "Beach buggy rides",
      "Himchari National Park visit",
      "Inani Beach rocky shore walk",
      "Ramu Buddhist village tour",
      "Sunset fishing boat trip"
    ],
    excludes: ["Personal shopping", "Water sports (optional)", "Sea fishing"],
    itinerary: [
      { day: 1, title: "Arrive Cox's Bazar", desc: "Overnight bus/train from Dhaka, morning arrival, hotel check-in, afternoon Laboni Beach." },
      { day: 2, title: "Full Coastal Exploration", desc: "Himchari waterfall, Inani Beach, Ramu village, evening sunset at Sugandha Beach." },
      { day: 3, title: "Departure Day", desc: "Early morning sunrise swim, seafood breakfast, shopping at beach market, return journey." }
    ],
    highlights: ["World's longest natural sea beach", "Fresh seafood at beach restaurants", "Beach buggy sunset ride"],
    category: "domestic",
    featured: false
  },
  {
    id: 8,
    slug: "sajek-valley-clouds",
    destination: "Sajek Valley",
    title: "Sajek Valley — Kingdom of Clouds",
    subtitle: "Ruailu Para • Konglak Para • CHT Hills",
    duration: "3 Days / 2 Nights",
    price: 5800,
    originalPrice: 7200,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    badge: "Nature Escape",
    badgeColor: "secondary",
    rating: 4.8,
    reviews: 267,
    groupSize: "4–16 Persons",
    includes: [
      "Private jeep/microbus transport",
      "Cozy hill resort accommodation",
      "Daily meals (breakfast & dinner)",
      "Sunrise & sunset valley viewpoint",
      "Ethnic village cultural tour",
      "Trekking to Konglak Para hilltop",
      "Bonfire evening with local music",
      "CHT permit assistance"
    ],
    excludes: ["Personal gear", "Raincoat (recommended)", "Extra snacks"],
    itinerary: [
      { day: 1, title: "Dhaka to Sajek", desc: "Early morning departure, scenic CHT drive through Khagrachhari, arrive Sajek noon, explore Ruailu Para." },
      { day: 2, title: "Cloud Kingdom Day", desc: "Sunrise above the clouds, Konglak hilltop trek, Lushai tribal village, sunset bonfire." },
      { day: 3, title: "Return Journey", desc: "Morning mist photography walk, breakfast, drive back through Rangamati, return Dhaka evening." }
    ],
    highlights: ["Walk above the clouds at 1800ft", "Tribal culture & bamboo dance", "Most photogenic spot in Bangladesh"],
    category: "domestic",
    featured: false
  }
]

export const destinations = [
  { id: 1, name: "Thailand", country: "Southeast Asia", image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80", tours: 8, flag: "🇹🇭" },
  { id: 2, name: "Malaysia", country: "Southeast Asia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", tours: 6, flag: "🇲🇾" },
  { id: 3, name: "Singapore", country: "Southeast Asia", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", tours: 4, flag: "🇸🇬" },
  { id: 4, name: "Dubai", country: "Middle East", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", tours: 7, flag: "🇦🇪" },
  { id: 5, name: "Turkey", country: "Europe-Asia", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80", tours: 5, flag: "🇹🇷" },
  { id: 6, name: "Maldives", country: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80", tours: 4, flag: "🇲🇻" },
  { id: 7, name: "Cox's Bazar", country: "Bangladesh", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", tours: 10, flag: "🇧🇩" },
  { id: 8, name: "Nepal", country: "South Asia", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", tours: 5, flag: "🇳🇵" },
  { id: 9, name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", tours: 6, flag: "🇮🇩" },
  { id: 10, name: "Switzerland", country: "Europe", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80", tours: 3, flag: "🇨🇭" },
  { id: 11, name: "Japan", country: "East Asia", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", tours: 4, flag: "🇯🇵" },
  { id: 12, name: "Sajek Valley", country: "Bangladesh", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", tours: 8, flag: "🇧🇩" }
]

export const testimonials = [
  {
    id: 1,
    name: "Rahela Khanam",
    role: "Traveled to Thailand",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c6?w=100&q=80",
    rating: 5,
    review: "Devntric Travels made our Thailand honeymoon absolutely magical. Every detail was taken care of — from visa processing to hotel upgrades. Our guide was knowledgeable and the itinerary was perfectly balanced. I couldn't imagine a better agency.",
    date: "March 2025",
    verified: true
  },
  {
    id: 2,
    name: "Md. Karim Uddin",
    role: "Corporate Travel — Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    review: "We booked our entire company conference trip through Devntric. They managed 25 people flawlessly — flights, hotels, conference venue coordination. Their corporate travel team is incredibly professional and responsive. We'll use them for all future business travel.",
    date: "February 2025",
    verified: true
  },
  {
    id: 3,
    name: "Sabrina Akter",
    role: "Family Trip to Malaysia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    review: "Traveled with my family of 5 including elderly parents and kids. Devntric arranged everything with amazing care — wheelchair assistance at airports, halal restaurants, child-friendly activities. My parents said it was the trip of their lifetime!",
    date: "January 2025",
    verified: true
  },
  {
    id: 4,
    name: "Tanvir Ahmed",
    role: "Solo Backpacker — Turkey",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    review: "The Turkey package exceeded all my expectations. Cappadocia hot air balloon, Hagia Sophia, the Turkish breakfast culture — all perfectly organized. Visa was processed within 3 days. The price was 30% cheaper than other agencies I compared.",
    date: "December 2024",
    verified: true
  },
  {
    id: 5,
    name: "Nasrin Begum",
    role: "Maldives Honeymoon",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    review: "Our Maldives honeymoon package was beyond romantic. The overwater bungalow, the underwater restaurant dinner, the dolphin cruise at sunset — every moment felt tailored for us. Devntric added a surprise flower arrangement in our room. Truly 5-star service!",
    date: "November 2024",
    verified: true
  },
  {
    id: 6,
    name: "Fazlul Haque",
    role: "Dubai Business Trip",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4,
    review: "Excellent Dubai package with premium hotel and smooth visa processing. The desert safari evening was a highlight. Only minor feedback: the airport pickup was slightly delayed on day 1, but the team quickly resolved it. Overall a great experience.",
    date: "October 2024",
    verified: true
  }
]

export const blogPosts = [
  {
    id: 1,
    slug: "complete-thailand-travel-guide-bangladeshi",
    title: "The Complete Thailand Travel Guide for Bangladeshi Travelers in 2025",
    excerpt: "Everything you need to know about visiting Thailand from Bangladesh — visa requirements, best time to visit, budget tips, must-see spots, and insider secrets.",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
    category: "Destination Guide",
    author: "Tariq Mahmud",
    authorRole: "Senior Travel Consultant",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80",
    date: "June 12, 2025",
    readTime: "8 min read",
    tags: ["Thailand", "Travel Tips", "Visa Guide"],
    featured: true,
    content: `Thailand remains one of the most popular destinations for Bangladeshi travelers, offering a perfect blend of tropical beaches, ancient temples, vibrant nightlife, and delicious cuisine — all at a budget-friendly price.

**Getting Your Thai Visa**
Bangladeshi passport holders require a tourist visa for Thailand. The process is straightforward: apply at the Royal Thai Embassy in Dhaka with your passport, photographs, bank statements, and hotel booking confirmation. Processing typically takes 3–5 working days, and a single-entry tourist visa is valid for 30 days.

**Best Time to Visit**
The optimal window is November through February when temperatures range from 25–33°C and rainfall is minimal. March–May brings intense heat (up to 40°C), while June–October is monsoon season — still beautiful but expect afternoon rain.

**Budget Breakdown (per person)**
- Budget trip: ৳35,000–৳45,000 (including flights)
- Mid-range: ৳55,000–৳75,000
- Luxury: ৳90,000+

**Must-Visit Places**
Bangkok's Grand Palace and Wat Pho are non-negotiable. Head north to Chiang Mai for the Elephant Nature Park and Doi Inthanon. South, Phuket and Koh Samui offer world-class beaches. Don't skip Ayutthaya, the ancient capital just 80km from Bangkok.

**Halal Food Availability**
Thailand has a significant Muslim community, especially in the south. Bangkok's Bang Rak area and Sukhumvit Soi 3 have numerous halal restaurants. Inform your guide about dietary requirements and they'll ensure halal options throughout.

**Insider Tips**
Always carry small Thai Baht for street markets. The BTS Skytrain is the fastest way around Bangkok. Negotiate tuk-tuk fares before boarding. Dress modestly when visiting temples (cover shoulders and knees).`
  },
  {
    id: 2,
    slug: "schengen-visa-guide-bangladesh-2025",
    title: "Schengen Visa Application Guide from Bangladesh — Step by Step 2025",
    excerpt: "Applying for a Schengen visa from Bangladesh can feel daunting. This step-by-step guide walks you through every document, fee, and interview tip to maximize your approval chances.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
    category: "Visa Guide",
    author: "Nadia Islam",
    authorRole: "Visa Processing Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c6?w=60&q=80",
    date: "May 28, 2025",
    readTime: "12 min read",
    tags: ["Schengen Visa", "Europe", "Visa Tips"],
    featured: true,
    content: `The Schengen visa opens doors to 27 European countries with a single stamp. For Bangladeshi travelers, the approval rate has improved significantly in recent years when applications are properly prepared.

**What is a Schengen Visa?**
A Schengen visa allows entry to the 27 Schengen Area countries — including Germany, France, Italy, Spain, Switzerland, and the Netherlands — for up to 90 days within any 180-day period.

**Required Documents Checklist**
1. Valid passport (minimum 6 months validity beyond travel dates)
2. Completed Schengen visa application form
3. Recent passport photographs (35x45mm, white background)
4. Travel insurance covering minimum €30,000
5. Flight reservation/itinerary
6. Hotel bookings for entire stay
7. Bank statements (last 6 months, minimum balance per day)
8. Employment letter with salary details
9. Income tax returns (last 2 years)
10. No Objection Certificate (NOC) from employer

**Processing Timeline**
Standard processing: 15 working days. Apply at the VFS Global center in Dhaka at least 6–8 weeks before your travel date. Biometric enrollment is required.

**Common Rejection Reasons**
- Insufficient financial proof (most common)
- Vague travel purpose
- Previous visa rejections not disclosed
- Inconsistent documents
- No strong ties to Bangladesh shown

**Our Success Rate**
Devntric's visa team has processed over 1,200 Schengen applications with a 94% approval rate. We review every document before submission and prepare clients for potential interview questions.`
  },
  {
    id: 3,
    slug: "maldives-honeymoon-budget-guide",
    title: "Maldives Honeymoon on a Budget: How to Experience Paradise Without Breaking the Bank",
    excerpt: "The Maldives doesn't have to cost a fortune. Discover how to experience overwater bungalows, crystal waters and tropical luxury at prices that won't shock your wallet.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    category: "Travel Tips",
    author: "Shirin Akter",
    authorRole: "Honeymoon Packages Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80",
    date: "May 14, 2025",
    readTime: "7 min read",
    tags: ["Maldives", "Honeymoon", "Budget Travel"],
    featured: false,
    content: "Detailed Maldives budget guide content here..."
  },
  {
    id: 4,
    slug: "top-10-things-dubai-first-time",
    title: "Top 10 Things to Do in Dubai for First-Time Visitors from Bangladesh",
    excerpt: "Dubai is more than just tall buildings. From spice souks to desert safaris, here are the 10 experiences every first-time Bangladeshi visitor must have in the City of Gold.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "Destination Guide",
    author: "Mahfuz Rahman",
    authorRole: "Middle East Travel Expert",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80",
    date: "April 30, 2025",
    readTime: "9 min read",
    tags: ["Dubai", "UAE", "First Time Travel"],
    featured: false,
    content: "Detailed Dubai guide content here..."
  },
  {
    id: 5,
    slug: "sajek-valley-travel-guide",
    title: "Sajek Valley Travel Guide — Bangladesh's Most Breathtaking Hill Station",
    excerpt: "Nestled at 1,800 feet in the Chittagong Hill Tracts, Sajek Valley is Bangladesh's own cloud kingdom. Here's your complete guide to planning the perfect trip.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "Domestic Travel",
    author: "Raihan Chowdhury",
    authorRole: "Domestic Tour Coordinator",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
    date: "April 12, 2025",
    readTime: "6 min read",
    tags: ["Sajek", "Bangladesh", "Hill Station"],
    featured: false,
    content: "Detailed Sajek Valley guide content here..."
  },
  {
    id: 6,
    slug: "corporate-travel-management-guide",
    title: "Corporate Travel Management: How to Cut Business Travel Costs Without Compromising Quality",
    excerpt: "Smart corporate travel planning can save your company 20–40% annually. Learn the strategies that Devntric's corporate travel team uses for Bangladesh's leading businesses.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    category: "Corporate Travel",
    author: "Tariq Mahmud",
    authorRole: "Senior Travel Consultant",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80",
    date: "March 25, 2025",
    readTime: "10 min read",
    tags: ["Corporate Travel", "Business", "Travel Management"],
    featured: false,
    content: "Detailed corporate travel guide content here..."
  }
]

export const teamMembers = [
  {
    id: 1,
    name: "Imtiaz Hossain",
    role: "Founder & CEO",
    bio: "15+ years in travel industry. Founded Devntric Travels with a mission to make world-class travel accessible to every Bangladeshi.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 2,
    name: "Shahnaz Parvin",
    role: "Director of Operations",
    bio: "Former airline industry professional with expertise in large-scale group travel logistics and supplier negotiations across 30+ countries.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 3,
    name: "Tariq Mahmud",
    role: "Senior Travel Consultant",
    bio: "Specialist in Southeast Asia and Middle East tours. Has personally visited 40+ countries and designed over 500 custom itineraries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 4,
    name: "Nadia Islam",
    role: "Visa Processing Head",
    bio: "Expert in Schengen, US, UK, and Asian visa applications. 98% success rate with over 3,000 visa applications processed successfully.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c6?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 5,
    name: "Raihan Chowdhury",
    role: "Domestic Tour Coordinator",
    bio: "Deep knowledge of Bangladesh's hidden gems. Designed signature trekking routes through the Chittagong Hill Tracts and Sundarbans.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  },
  {
    id: 6,
    name: "Shirin Akter",
    role: "Honeymoon Specialist",
    bio: "Crafts unforgettable romantic experiences. Has curated over 200 honeymoon packages to Maldives, Bali, and Europe.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    social: { linkedin: "#", facebook: "#" }
  }
]

export const faqs = [
  {
    id: 1,
    category: "Booking",
    question: "How do I book a tour package with Devntric Travels?",
    answer: "Booking is simple! You can call us directly at +880-1700-000000, send us a WhatsApp message, fill out our online contact form, or visit our Dhaka office. Our consultants will discuss your requirements, suggest the best package, and guide you through the entire booking process step by step."
  },
  {
    id: 2,
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers (BRAC Bank, Dutch-Bangla, Islami Bank), mobile banking (bKash, Nagad, Rocket), credit/debit cards, and cash payments at our office. For international tours, a 30% advance is required at booking, with the remaining 70% due 15 days before departure."
  },
  {
    id: 3,
    category: "Visa",
    question: "Can you help process my visa for any country?",
    answer: "Yes! We provide visa assistance for 50+ countries including UAE, Malaysia, Thailand, Singapore, Turkey, Schengen countries, UK, USA, and more. Our dedicated visa team handles document preparation, application submission, and tracks your application status. We have a 94%+ visa approval rate."
  },
  {
    id: 4,
    category: "Packages",
    question: "Are meals included in tour packages?",
    answer: "Most of our packages include daily breakfast and select dinners as mentioned in the package details. Full-board options (all meals included) are available for Maldives and selected resort packages. Lunch is typically at your own leisure to allow flexibility in exploring local cuisine."
  },
  {
    id: 5,
    category: "Booking",
    question: "Can I customize a tour package to my preferences?",
    answer: "Absolutely! All our packages are fully customizable. Tell us your budget, travel dates, interests, dietary requirements, and accommodation preferences — our consultants will design a personalized itinerary just for you. Custom group packages for 10+ travelers get special pricing."
  },
  {
    id: 6,
    category: "Cancellation",
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 30+ days before departure receive a 90% refund. 15–29 days: 60% refund. 7–14 days: 30% refund. Less than 7 days: no refund (but credit can be applied to future travel). Force majeure events (natural disasters, political unrest) are handled case by case with maximum flexibility."
  },
  {
    id: 7,
    category: "Packages",
    question: "Are your tour packages suitable for solo travelers?",
    answer: "Yes! We cater to solo travelers, couples, families, and groups. Solo travelers can join our shared group departures at regular pricing, or opt for a private tour with a single supplement. We also have a solo traveler community WhatsApp group where you can connect with fellow travelers before the trip."
  },
  {
    id: 8,
    category: "Visa",
    question: "How long does visa processing take?",
    answer: "Processing times vary by country: UAE (3–5 days), Malaysia (3–7 days), Thailand (3–5 days), Singapore (7–10 days), Schengen/Europe (15–25 days), UK (15–20 days), USA (appointment required, 30–60 days). We always recommend applying well in advance. Express processing is available for select countries."
  },
  {
    id: 9,
    category: "Services",
    question: "Do you offer travel insurance?",
    answer: "Yes, we strongly recommend and offer comprehensive travel insurance through our insurance partners. Coverage includes medical emergencies, trip cancellation, lost baggage, flight delays, and emergency evacuation. Premiums start from ৳1,500 per person for a standard 7-day trip."
  },
  {
    id: 10,
    category: "Services",
    question: "What is included in your corporate travel packages?",
    answer: "Our corporate travel service covers: business class upgrades, conference venue coordination, group hotel negotiation, executive airport transfers, travel policy management, expense reporting, 24/7 emergency travel assistance, and dedicated account management. We serve companies of all sizes with monthly retainer or per-trip billing."
  }
]

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80", category: "Thailand", title: "Temples of Bangkok" },
  { id: 2, src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", category: "Dubai", title: "Burj Khalifa at Dusk" },
  { id: 3, src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80", category: "Maldives", title: "Crystal Waters of Maldives" },
  { id: 4, src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80", category: "Turkey", title: "Istanbul at Sunset" },
  { id: 5, src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", category: "Singapore", title: "Gardens by the Bay" },
  { id: 6, src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", category: "Bali", title: "Bali Rice Terraces" },
  { id: 7, src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", category: "Malaysia", title: "Petronas Twin Towers" },
  { id: 8, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", category: "Bangladesh", title: "Cox's Bazar Shoreline" },
  { id: 9, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", category: "Bangladesh", title: "Sajek Valley Clouds" },
  { id: 10, src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", category: "Japan", title: "Mount Fuji Morning" },
  { id: 11, src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", category: "Nepal", title: "Himalayan Peak Trek" },
  { id: 12, src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80", category: "Europe", title: "Swiss Alps Village" },
  { id: 13, src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80", category: "Travel", title: "Above the Clouds" },
  { id: 14, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", category: "Travel", title: "Beach Horizon" },
  { id: 15, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", category: "Travel", title: "Open Road Adventures" },
  { id: 16, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80", category: "Travel", title: "Travel Planning" }
]
