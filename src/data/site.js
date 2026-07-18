// Single source of truth for Salon Uccelli content.
// Facts verified via public listings (Google/Birdeye, Fresha, business search) — July 2026.
// Anything not independently verifiable is explicitly marked as a placeholder below.

export const shop = {
  name: 'Salon Uccelli',
  full: 'Salon Uccelli',
  address: '609 US-6, Mahopac, NY 10541',
  phone: '(845) 621-2500',
  phoneHref: 'tel:8456212500',
  // No public email address found — placeholder, confirm with owner before publishing.
  email: 'info@salonuccelli.com',
  emailIsPlaceholder: true,
  tagline: 'Color, Cut & Craft — Mahopac’s Salon Since 2002.',
  vision:
    'Every guest leaves feeling like the best version of themselves — that’s been the standard here since day one.',
  intro:
    'A full-service hair salon in the heart of Mahopac — color, cutting, blowouts, and bridal styling from a team that’s been perfecting the craft since 2002.',
  founded: 2002,
}

export const hours = [
  { day: 'Monday',    open: null,        close: null,     d: 1, closed: true },
  { day: 'Tuesday',   open: '10:00 AM',  close: '5:00 PM', d: 2 },
  { day: 'Wednesday', open: '10:00 AM',  close: '8:00 PM', d: 3 },
  { day: 'Thursday',  open: '10:00 AM',  close: '5:00 PM', d: 4 },
  { day: 'Friday',    open: '10:00 AM',  close: '8:00 PM', d: 5 },
  { day: 'Saturday',  open: '9:00 AM',   close: '5:00 PM', d: 6 },
  { day: 'Sunday',    open: null,        close: null,      d: 0, closed: true },
]

// No public price list found for this salon (common for color-heavy salons —
// pricing depends on hair length/density). Services shown WITHOUT invented
// prices; site directs guests to call/text for a quote. Confirm with owner
// if a real price list should be added.
export const servicesPricingAvailable = false
export const services = [
  { name: 'Haircut & Style',      cat: 'hair',  blurb: 'A precision cut finished with a full blow-dry style, tailored to your face shape and texture.', img: 'services/haircut.jpg' },
  { name: 'Color & Highlights',   cat: 'color', blurb: 'Single-process color, foil highlights, and dimensional color work from the salon’s color team.', img: 'services/color.jpg' },
  { name: 'Balayage',             cat: 'color', blurb: 'Hand-painted, low-maintenance dimension for a natural sun-kissed grow-out.', img: 'services/balayage.jpg' },
  { name: 'Blowout',              cat: 'hair',  blurb: 'A polished, salon-fresh blowout for any day of the week.', img: 'services/blowout.jpg' },
  { name: 'Bridal & Special Occasion', cat: 'bridal', blurb: 'Hair and makeup for the bride and her full party, on-site or in-salon.', img: 'services/bridal.jpg' },
  { name: 'Makeup',               cat: 'makeup', blurb: 'Professional makeup application for weddings, events, and photo-ready moments.', img: 'services/makeup.jpg' },
  { name: 'Waxing & Threading',   cat: 'beauty', blurb: 'Eyebrow threading and waxing services to finish your look.', img: 'services/waxing.jpg' },
  { name: 'Facials',              cat: 'beauty', blurb: 'Skincare treatments to refresh and restore.', img: 'services/facial.jpg' },
]

export const perks = [
  { label: 'Serving Mahopac Since 2002', icon: 'shield' },
  { label: 'Bridal Party Packages',      icon: 'gift'   },
  { label: 'Walk-ins Welcome',           icon: 'door'   },
  { label: 'Gift Certificates',          icon: 'wallet' },
]

// Real Google reviews (via Birdeye-hosted Google review feed), 4.8★ / 85 reviews as of Jul 2026.
// Source: https://reviews.birdeye.com/salon-uccelli-170113731541249
export const reviewsArePlaceholder = false
export const googleRating = { stars: 4.8, count: 85 }
export const reviews = [
  { text: "I just came back from this salon and oh my goodness! I don’t have enough good things to say about this salon. The workers are amazing and excellent at what they do and very friendly! The salon itself is gorgeous and the price is more than reasonable. My new favorite salon!", name: 'Jenna Rose', meta: 'Google Review' },
  { text: "Lee always does the best job on my hair! I never let anyone touch my hair but I trusted her after my first appointment. I come weekly for a blowout and sometimes for a haircut. This salon is simply amazing.", name: 'Gabriella Teti', meta: 'Google Review' },
  { text: "Wonderful place, clean and very hospitable.", name: 'Rosemarie Pennella', meta: 'Google Review' },
  { text: "Love this salon!!", name: 'Gemma Stoecker', meta: 'Google Review' },
]

export const nav = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Team',     to: '/team' },
  { label: 'Contact',  to: '/contact' },
]

export const bookNow = { label: 'Book Now', href: shop.phoneHref }

// Real, named stylists — sourced from public reviews and business listings.
// Bios kept minimal/factual; no invented tenure or credentials.
export const teamAreReal = true
export const team = [
  { name: 'Karen',     role: 'Colorist',          bio: 'Known among regulars for her color work — highlights, dimensional color, and precise formulation.', photoPlaceholder: true },
  { name: 'Stephanie', role: 'Stylist & Colorist', bio: 'Specializes in highlights and balayage, building looks that grow out as beautifully as they go out.', photoPlaceholder: true },
  { name: 'Lee',       role: 'Stylist',            bio: 'The go-to for blowouts and cuts — the kind of stylist clients come back to weekly.', photoPlaceholder: true },
]

// No confirmed shop walkthrough video exists yet — placeholder flagged, unlike FadeHaus.
export const video = {
  isPlaceholder: true,
  src: null,
  poster: null,
  caption: 'A look inside Salon Uccelli',
  note: 'Real walkthrough video pending — swap in once the salon supplies footage.',
}

// Gallery: Pexels stock (free license) as placeholders until real salon/work photos are supplied.
export const galleryImages = [
  { src: 'gallery/g1.jpg', alt: 'Balayage color result', ratio: 1.5 },
  { src: 'gallery/g2.jpg', alt: 'Salon styling station', ratio: 0.67 },
  { src: 'gallery/g3.jpg', alt: 'Blowout finish', ratio: 1.5 },
  { src: 'gallery/g4.jpg', alt: 'Color application', ratio: 0.67 },
  { src: 'gallery/g5.jpg', alt: 'Bridal hair styling', ratio: 1.5 },
  { src: 'gallery/g6.jpg', alt: 'Precision haircut', ratio: 0.67 },
  { src: 'gallery/g7.jpg', alt: 'Salon interior', ratio: 1.5 },
  { src: 'gallery/g8.jpg', alt: 'Finished color look', ratio: 0.67 },
]
export const galleryIsStock = true

export const faqs = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but calling ahead is the best way to guarantee your stylist and time — (845) 621-2500.' },
  { q: 'What are your hours?', a: 'Tue & Thu 10 AM–5 PM, Wed & Fri 10 AM–8 PM, Sat 9 AM–5 PM. Closed Sunday and Monday.' },
  { q: 'Do you do bridal hair and makeup?', a: 'Yes — Salon Uccelli offers hair and makeup for brides and their full wedding party, in-salon or on-site.' },
  { q: 'How much does a color service cost?', a: 'Pricing depends on hair length, density, and the service — call the salon for an accurate quote.' },
  { q: 'Where are you located?', a: 'We’re at 609 US-6 (Route 6), Mahopac, NY 10541.' },
]
