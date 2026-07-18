export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={alignClass}>
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="font-display uppercase text-4xl sm:text-5xl leading-[0.9]">{title}</h2>
      {sub && <p className={`mt-5 text-muted max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>{sub}</p>}
      {!sub && <div className="barber-rule mt-6 w-24" />}
    </div>
  )
}
