import { Phone } from 'lucide-react'
import { shop } from '../data/site.js'

export default function FloatingBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[140] glass border-t border-line px-4 py-3 flex items-center justify-between">
      <div className="leading-none">
        <div className="font-label uppercase text-[10px] text-muted tracking-wide">Salon Uccelli</div>
        <div className="font-label uppercase text-xs text-gold tracking-wide">Book Now</div>
      </div>
      <a href={shop.phoneHref} className="btn-gold text-xs px-5 py-2.5">
        <Phone size={15} /> Call
      </a>
    </div>
  )
}
