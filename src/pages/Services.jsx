import { Scissors } from 'lucide-react'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { services, servicesPricingAvailable, shop } from '../data/site.js'

export default function Services() {
  return (
    <Page>
      <Seo title="Services — Salon Uccelli" description="Haircuts, color, balayage, blowouts, bridal styling, makeup, waxing, and facials at Salon Uccelli in Mahopac, NY." />
      <section className="pt-40 pb-24 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Full Service"
          title="Services"
          sub={servicesPricingAvailable ? undefined : `Pricing varies by hair length and service — call ${shop.phone} for a quote.`}
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <TiltCard maxTilt={4} className="h-full glass rounded-md overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${s.img}`}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,16,0) 55%, rgba(20,17,16,.85) 100%)' }} />
                  <Scissors className="absolute top-3 left-3 text-gold drop-shadow" size={22} />
                </div>
                <div className="p-6">
                  <h3 className="font-label font-bold uppercase tracking-wide text-lg">{s.name}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{s.blurb}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-14 text-center">
          <a href={shop.phoneHref} className="btn-gold">Call For Pricing &amp; Availability</a>
        </Reveal>
      </section>
    </Page>
  )
}
