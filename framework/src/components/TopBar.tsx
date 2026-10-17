import { sections, type SectionLabel } from '../data/site'

/** Monogram back to travingn.dev on the left, the sibling sites on the right. Same as the landing page's bar, minus the sky timeline. */
export default function TopBar({ current }: { current: SectionLabel }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 pt-4 sm:pt-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
        <a
          href="https://travingn.dev/"
          aria-label="Travis Nguyen, home"
          className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink/15 bg-paper font-display text-lg font-medium text-ink shadow-card transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          TN
        </a>

        <nav aria-label="Sites" className="pointer-events-auto">
          <ul className="flex h-10 items-center gap-4 rounded-md border border-ink/15 bg-paper px-4 text-sm font-medium shadow-card">
            {sections.map((section) => (
              <li key={section.label}>
                <a
                  href={section.href}
                  aria-current={section.label === current ? 'page' : undefined}
                  className="decoration-ember decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none aria-[current=page]:underline"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
