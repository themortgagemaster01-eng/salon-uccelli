import { MapPin, Phone, Mail } from 'lucide-react'
import { shop } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-line pb-16 md:pb-0">
      <div className="barber-rule" />
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-gold tracking-tighter">SALON UCCELLI</div>
          <p className="mt-3 text-muted text-sm leading-relaxed max-w-xs">{shop.intro}</p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="eyebrow mb-3">Visit</div>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`} className="flex items-start gap-3 hover:text-gold">
            <MapPin size={18} className="text-gold shrink-0 mt-0.5" /> {shop.address}
          </a>
          <a href={shop.phoneHref} className="flex items-center gap-3 hover:text-gold">
            <Phone size={18} className="text-gold shrink-0" /> {shop.phone}
          </a>
          {!shop.emailIsPlaceholder && (
            <a href={`mailto:${shop.email}`} className="flex items-center gap-3 hover:text-gold break-all">
              <Mail size={18} className="text-gold shrink-0" /> {shop.email}
            </a>
          )}
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Hours</div>
          <p className="text-muted leading-relaxed">
            Tue &amp; Thu 10:00 AM – 5:00 PM<br />
            Wed &amp; Fri 10:00 AM – 8:00 PM<br />
            Saturday 9:00 AM – 5:00 PM<br />
            Closed Sunday &amp; Monday
          </p>
        </div>
      </div>
      <div className="border-t border-line px-6 py-6 text-center">
        <p className="text-xs text-muted/70 tracking-wide">
          © {new Date().getFullYear()} {shop.full} · Concept redesign by Obsidian Labs · obsidianlabshq.io
        </p>
      </div>
    </footer>
  )
}
