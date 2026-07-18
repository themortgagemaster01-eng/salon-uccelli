import { Quote } from 'lucide-react'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import { shop } from '../data/site.js'

export default function About() {
  return (
    <Page>
      <Seo title="About — Salon Uccelli" description="Salon Uccelli has been a fixture in Mahopac, NY since 2002 — full-service color, cutting, and styling." />
      <section className="pt-40 pb-24 mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Our Story" title="Two Decades In Mahopac" align="center" />
        <Reveal delay={0.1} className="mt-12">
          <figure className="glass rounded-md p-8 sm:p-12 text-center">
            <Quote className="mx-auto text-gold mb-5" size={32} />
            <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed">{shop.vision}</blockquote>
          </figure>
        </Reveal>
        <Reveal delay={0.2} className="mt-12">
          <p className="text-muted leading-relaxed text-lg">
            Salon Uccelli has been part of the Mahopac community since {shop.founded} — a full-service
            salon built around color, cutting, and styling craft. Guests come back year after year for the
            same reason: a team that knows their hair, and takes the time to get it right.
          </p>
          <p className="mt-5 text-muted leading-relaxed text-lg">
            From everyday blowouts to full bridal party styling, the salon handles it all a few doors down
            Route 6 in Mahopac.
          </p>
        </Reveal>
      </section>
    </Page>
  )
}
