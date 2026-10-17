import type { CSSProperties } from 'react'

/** Soft banks of light, the only blurred layer: [left %, top %, width %, height %, opacity]. */
const HAZE = [
  [58, 6, 70, 26, 0.12],
  [-10, 30, 60, 22, 0.09],
  [62, 52, 50, 20, 0.1],
  [10, 74, 80, 18, 0.14],
] as const

/** Small deterministic generator so the star field is the same on every visit and render. */
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const rand = seeded(20261017)
const STARS = Array.from({ length: 90 }, () => {
  const mag = rand()
  return {
    left: rand() * 100,
    // Fewer stars toward the lighter bottom of the gradient, as in the real sky's haze.
    top: Math.pow(rand(), 1.4) * 100,
    size: mag > 0.92 ? 3 : mag > 0.7 ? 2 : 1,
    base: 0.3 + mag * 0.6,
    twinkles: mag > 0.8,
  }
})

/**
 * Fixed backdrop shared by the travingn.dev subsites: the landing page's twilight gradient and
 * haze with a fixed star field. Unlike the landing page it isn't the real sky, so it needs no
 * JS after the first render; only the brightest stars animate, with a CSS opacity/transform twinkle.
 */
export default function StaticSky() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f1a2e 0%, #1b2a47 45%, #3a4d6e 82%, #6b7a8f 100%)',
      }}
    >
      {HAZE.map(([left, top, width, height, opacity], i) => (
        <div
          key={i}
          className="absolute rounded-full bg-paper blur-3xl"
          style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, height: `${height}%`, opacity }}
        />
      ))}

      {STARS.map((star, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-paper ${star.twinkles ? 'star' : ''}`}
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              opacity: star.twinkles ? undefined : star.base,
              '--star-base': star.base,
              // Deterministic, uneven cycles so each star glimmers on its own schedule.
              animationDuration: `${5 + ((i * 7.3) % 9)}s`,
              animationDelay: `${-((i * 3.7) % 14)}s`,
              boxShadow: star.size === 3 ? '0 0 8px 1px rgb(255 248 230 / 0.55)' : undefined,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
