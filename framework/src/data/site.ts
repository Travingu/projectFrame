/**
 * The travingn.dev subsites, linked from the top bar. Games (https://games.travingn.dev/) is hidden
 * here for now, as on the landing page; the Games site's own copy of this file still lists it.
 */
export const sections = [{ label: 'Projects', href: 'https://projects.travingn.dev/' }] as const

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
