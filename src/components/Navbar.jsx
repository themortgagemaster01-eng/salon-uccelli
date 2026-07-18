import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { shop, nav, bookNow } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-x-0 border-t-0 rounded-none' : 'border-b border-transparent'
      }`}
    >
      <div className="bg-gradient-to-b from-goldbright to-gold text-ink text-center py-[7px] px-4">
        <p className="font-label text-[10px] sm:text-[11px] uppercase tracking-widest">
          Demo site built by{' '}
          <a href="https://obsidianlabshq.io" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-ink/70">
            Obsidian Labs
          </a>
        </p>
      </div>

      <div className={`mx-auto max-w-6xl flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm border border-gold flex items-center justify-center font-display text-gold text-lg">SU</div>
          <div className="leading-none">
            <div className="font-label font-bold uppercase tracking-wide text-cream text-sm">{shop.name}</div>
            <div className="font-label uppercase tracking-[0.2em] text-gold text-[9px]">Mahopac, NY</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `font-label uppercase tracking-wide text-xs transition-colors ${isActive ? 'text-gold' : 'text-cream hover:text-gold'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={bookNow.href} className="btn-gold text-xs px-6 py-3">{bookNow.label}</a>
        </div>

        <button className="md:hidden text-cream" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ink2 border-t border-line overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-label uppercase tracking-wide text-cream">
                  {n.label}
                </NavLink>
              ))}
              <a href={bookNow.href} className="btn-gold w-fit text-xs px-6 py-3">{bookNow.label}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
