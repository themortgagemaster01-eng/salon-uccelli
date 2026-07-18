import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ReviewsCarousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer.current)
  }, [paused, reviews.length])

  const go = (dir) => setIndex((i) => (i + dir + reviews.length) % reviews.length)

  const r = reviews[index]

  return (
    <div
      className="relative max-w-3xl mx-auto glass rounded-md p-8 sm:p-12 text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="mx-auto text-gold mb-5" size={32} />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-serif text-xl sm:text-2xl leading-relaxed">&ldquo;{r.text}&rdquo;</p>
          <p className="mt-6 eyebrow">{r.name} · {r.meta}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button onClick={() => go(-1)} aria-label="Previous review" className="text-muted hover:text-gold transition-colors">
          <ChevronLeft size={22} />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gold' : 'bg-line'}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review" className="text-muted hover:text-gold transition-colors">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
