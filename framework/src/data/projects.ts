import type { Entry } from './site'

/**
 * Facts come from each project's own README or CLAUDE.md (in Projects/) and the résumé on
 * travingn.dev. Don't add claims that aren't there.
 */
export const projects: Entry[] = [
  {
    title: 'Nvevo',
    meta: 'Web app · Live',
    description:
      'Search any US public company and chart its income statement, balance sheet, and cash flow straight from SEC EDGAR filings. Build custom metrics, compare companies side by side, and model fair value.',
    tech: ['React', 'TypeScript', 'FastAPI', 'AWS'],
    image: { src: '/images/nvevo.webp', alt: 'Nvevo, an SEC filing explorer' },
    link: { label: 'Open nvevo.com', href: 'https://nvevo.com/' },
  },
  {
    title: 'Trade Desk',
    meta: 'Web app · Private',
    description:
      'A trade and waiver calculator for one ESPN fantasy football league. It scores trades and waiver moves by how they change your weekly lineup and how the other manager is likely to see them, and syncs with ESPN every Tuesday.',
    tech: ['Next.js', 'TypeScript', 'AWS Cognito, DynamoDB and Lambda'],
    status: 'Private: only I can sign in',
  },
  {
    title: 'Piano visualizer',
    meta: 'Desktop app',
    description:
      'Shows piano music as notes falling onto an 88-key keyboard. Play a MIDI file, play live from a MIDI keyboard, or export the performance as an MP4 video with a piano soundtrack.',
    tech: ['Python', 'PyQt6', 'NumPy'],
    image: {
      src: '/images/piano-visualizer.webp',
      alt: 'Glowing notes falling onto a piano keyboard, with sparks where they land',
    },
    status: 'Runs on Windows',
  },
  {
    title: 'PyMiDio',
    meta: 'Desktop app · Mar 2026',
    description:
      'An audio-to-MIDI transcriber built on the open-source Transkun model, with the recording, pitch bend, and velocity editing the model lacks. It cut the time to recreate a piano arrangement from a week to under five hours.',
    tech: ['Python', 'NumPy', 'PyQt6'],
    link: { label: 'View on GitHub', href: 'https://github.com/Travingu/PyMiDio' },
  },
  {
    title: 'GroupUp',
    meta: 'Web app · Apr 2025',
    description:
      'A directory of every UW club, built as an unofficial stand-in while the official site was being migrated. It was used in UW’s virtual first-year orientation and drew over 270 visitors.',
    tech: ['React', 'TypeScript', 'Firebase'],
    status: 'No public link',
  },
  {
    title: 'Line-Following Robot',
    meta: 'Hardware · Jan – Mar 2026',
    description:
      'A custom PCB designed in KiCad that puts the motor driver and sensor circuitry on one compact board, with a PID control loop tuned for precise, real-time motor speed and direction.',
    tech: ['KiCad', 'Arduino'],
  },
]
