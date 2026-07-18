import { MapPin, Phone, Clock } from 'lucide-react'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import BookingWidget from '../components/BookingWidget.jsx'
import { shop, hours } from '../data/site.js'

export default function Contact() {
  return (
    <Page>
      <Seo title="Contact — Salon Uccelli" description="Visit Salon Uccelli at 609 US-6, Mahopac, NY 10541, or call (845) 621-2500 to book." />
      <section className="pt-40 pb-24 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Get In Touch" title="Contact & Hours" align="center" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-md p-8 space-y-6">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-gold transition-colors">
                <MapPin className="text-gold shrink-0 mt-1" size={22} />
                <span className="text-lg">{shop.address}</span>
              </a>
              <a href={shop.phoneHref} className="flex items-center gap-4 hover:text-gold transition-colors">
                <Phone className="text-gold shrink-0" size={22} />
                <span className="text-lg">{shop.phone}</span>
              </a>
              <div className="flex items-start gap-4">
                <Clock className="text-gold shrink-0 mt-1" size={22} />
                <ul className="text-muted leading-relaxed">
                  {hours.map((h) => (
                    <li key={h.day}>
                      <span className="text-cream">{h.day}:</span>{' '}
                      {h.closed ? 'Closed' : `${h.open} – ${h.close}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingWidget />
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
