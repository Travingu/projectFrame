/** The travingn.dev subsites, linked from the top bar. Same list on both the Projects and Games sites. */
export const sections = [
  { label: 'Projects', href: 'https://projects.travingn.dev/' },
  { label: 'Games', href: 'https://games.travingn.dev/' },
] as const

export type SectionLabel = (typeof sections)[number]['label']

export interface Entry {
  title: string
  /** Kind, context and dates. */
  meta: string
  description: string
  tech: string[]
  image?: { src: string; alt: string }
  /** Where to try it. Entries without a public link can show `status` instead, or nothing. */
  link?: { label: string; href: string }
  status?: string
}
