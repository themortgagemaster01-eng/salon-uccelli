import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import { galleryImages, galleryIsStock } from '../data/site.js'

export default function Gallery() {
  return (
    <Page>
      <Seo title="Gallery — Salon Uccelli" description="A look at color, cutting, and styling work from Salon Uccelli in Mahopac, NY." />
      <section className="pt-40 pb-24 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Our Work" title="Gallery" align="center" />
        {galleryIsStock && (
          <p className="mt-4 text-center text-xs text-muted/70 italic">
            Stock photography shown as placeholders — swap in real client/work photos once supplied.
          </p>
        )}
        <div className="mt-14 columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((g, i) => (
            <Reveal key={g.src} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <div className="overflow-hidden rounded-sm border border-line group">
                <img
                  src={`${import.meta.env.BASE_URL}${g.src}`}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: g.ratio }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  )
}
