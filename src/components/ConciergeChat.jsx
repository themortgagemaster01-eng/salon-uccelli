import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { shop, hours } from '../data/site.js'

const CHIPS = [
  { key: 'hours', label: 'Hours', q: 'What are your hours?' },
  { key: 'services', label: 'Services', q: 'What services do you offer?' },
  { key: 'book', label: 'Book', q: 'How do I book?' },
  { key: 'where', label: 'Location', q: 'Where are you located?' },
]

function hoursLine() {
  const tue = hours.find((h) => h.d === 2)
  const wed = hours.find((h) => h.d === 3)
  const sat = hours.find((h) => h.d === 6)
  return `We're open Tue & Thu ${tue.open}–${tue.close}, Wed & Fri ${wed.open}–${wed.close}, Sat ${sat.open}–${sat.close}. Closed Sunday and Monday.`
}

const ANSWERS = {
  hours: hoursLine(),
  services: 'Haircuts, color & highlights, balayage, blowouts, bridal hair & makeup, waxing, threading, and facials.',
  book: `Easiest way to book: call or text ${shop.phone}. We'll get you set up with the right stylist.`,
  where: `You'll find us at ${shop.address} — right on Route 6.`,
}

export default function ConciergeChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { who: 'bot', text: `Welcome to ${shop.full}. Ask me about hours, services, or how to book.` },
  ])
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, open])

  function ask(chip) {
    setMessages((m) => [...m, { who: 'user', text: chip.q }])
    setTimeout(() => {
      setMessages((m) => [...m, { who: 'bot', text: ANSWERS[chip.key] }])
    }, 350)
  }

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-[150]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-[74px] right-0 w-[330px] max-w-[82vw] bg-ink2 border border-line rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-panel px-[18px] py-4 border-b border-line">
              <div className="font-label font-bold uppercase tracking-wide text-[15px] text-cream">Ask Us</div>
              <div className="text-[11px] text-gold mt-0.5">● {shop.name} concierge</div>
            </div>
            <div ref={bodyRef} className="p-4 h-[260px] overflow-y-auto flex flex-col gap-2.5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    'px-3.5 py-2.5 rounded-xl text-sm leading-relaxed max-w-[86%] ' +
                    (m.who === 'bot'
                      ? 'bg-panel self-start rounded-bl-[3px] text-cream/90'
                      : 'bg-gold self-end rounded-br-[3px] text-cream')
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-[7px] px-4 pb-3">
              {CHIPS.map((c) => (
                <button
                  key={c.key}
                  onClick={() => ask(c)}
                  className="font-label text-[11px] uppercase tracking-wide px-3 py-[7px] border border-line rounded-full text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close concierge chat' : 'Open concierge chat'}
        className="w-[60px] h-[60px] rounded-full bg-gradient-to-b from-goldbright to-gold flex items-center justify-center shadow-[0_10px_34px_rgba(201,162,75,0.4)] transition-transform hover:scale-105"
      >
        {open ? <X size={26} className="text-cream" /> : <MessageCircle size={26} className="text-cream" />}
      </button>
    </div>
  )
}
