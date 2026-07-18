import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { faqs } from '../data/site.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 border-t border-line">
      <SectionHeading eyebrow="Questions" title="Good To Know" align="center" />
      <div className="mt-12 divide-y divide-line">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-label uppercase tracking-wide text-cream">{f.q}</span>
              <ChevronDown className={`text-gold shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} size={20} />
            </button>
            {open === i && <p className="pb-6 text-muted leading-relaxed">{f.a}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
