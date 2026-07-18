import { User } from 'lucide-react'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import { team } from '../data/site.js'

export default function Team() {
  return (
    <Page>
      <Seo title="Meet The Team — Salon Uccelli" description="Meet the stylists and colorists at Salon Uccelli in Mahopac, NY." />
      <section className="pt-40 pb-24 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Meet The Team" title="The Stylists" align="center" />
        <p className="mt-4 text-center text-xs text-muted/70 italic max-w-xl mx-auto">
          Real names from client reviews — photos pending real headshots from the salon.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="glass rounded-md overflow-hidden text-center">
                <div className="aspect-square bg-panel flex items-center justify-center border-b border-line">
                  <User size={56} className="text-muted/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-display uppercase text-2xl text-cream">{t.name}</h3>
                  <div className="eyebrow mt-1">{t.role}</div>
                  <p className="mt-4 text-muted text-sm leading-relaxed">{t.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  )
}
