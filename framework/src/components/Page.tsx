import type { Entry, SectionLabel } from '../data/site'
import EntryCard from './EntryCard'
import Footer from './Footer'
import StaticSky from './StaticSky'
import TopBar from './TopBar'

interface PageProps {
  current: SectionLabel
  lead: string
  entries: Entry[]
}

/** The whole subsite: sky, top bar, a heading, one card per entry, footer. */
export default function Page({ current, lead, entries }: PageProps) {
  return (
    <>
      <StaticSky />
      <TopBar current={current} />
      <main className="mx-auto w-full max-w-5xl px-4 pt-32 pb-24 sm:px-8 sm:pt-40 sm:pb-32">
        <div className="flex max-w-xl flex-col gap-4 pb-16">
          <h1 className="font-display text-6xl font-medium text-paper sm:text-8xl">{current}</h1>
          <p className="text-lg leading-8 text-paper/80">{lead}</p>
        </div>

        <ul className="flex flex-col gap-8">
          {entries.map((entry) => (
            <li key={entry.title}>
              <EntryCard entry={entry} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
