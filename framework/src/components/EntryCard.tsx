import type { Entry } from '../data/site'

/** One project or game: image beside the text when there is one, a single link (or a status) at the bottom. */
export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article
      className={`grid rounded-md bg-paper shadow-card ${entry.image ? 'md:grid-cols-[5fr_6fr]' : ''}`}
    >
      {/* Inset at its own 1200x630 proportions, so a title card is never cropped to the text's height. */}
      {entry.image && (
        <div className="self-center p-6 pb-0 sm:p-8 sm:pb-0 md:pr-0 md:pb-8">
          <img
            src={entry.image.src}
            alt={entry.image.alt}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
            className="aspect-[1200/630] w-full rounded-md border border-ink/15 bg-ink/10 object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm leading-6 text-ink-muted">{entry.meta}</p>
          <h2 className="font-display text-4xl font-medium text-ink">{entry.title}</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-ink-muted">{entry.description}</p>
        <p className="text-sm leading-6 text-ink-muted">{entry.tech.join(' · ')}</p>

        {(entry.link || entry.status) && (
          <div className="mt-auto border-t border-ink/15 pt-4">
            {entry.link ? (
              <a
                href={entry.link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-ink decoration-ember decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                {entry.link.label}
                <span aria-hidden="true" className="text-ember transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <p className="text-sm font-medium text-ink-muted">{entry.status}</p>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
