const features = [
  {
    index: '01',
    tag: 'Performance',
    title: 'Fast',
    description:
      'Built on Vite and the React Compiler for instant HMR and optimized production builds out of the box.',
  },
  {
    index: '02',
    tag: 'Architecture',
    title: 'Flexible',
    description:
      'A minimal starting point with no opinionated abstractions — add only what your project actually needs.',
  },
  {
    index: '03',
    tag: 'Tooling',
    title: 'Modern',
    description:
      'TypeScript, Tailwind CSS, and Oxlint configured from the start so you can skip the boilerplate setup.',
  },
]

const projects = Array.from({ length: 4 })
const projectCardClass =
  'flex aspect-4/3 w-56 flex-none flex-col items-center justify-center rounded-2xl border-[3px] border-black bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:w-64'

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink antialiased">
      <header className="w-full px-8 py-8">
        <a
          href="https://travingn.dev/"
          className="text-[32px] font-bold tracking-tight text-ink transition-opacity hover:opacity-60"
        >
          Travis Nguyen
        </a>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="pt-8 pb-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            PROJECT FRAME
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent">
            a starter framework by Travis
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-ink/20" />
        </div>

        <div className="mb-24 flex flex-col gap-16">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="flex-1">
                <span className="text-sm font-bold tracking-wide text-accent">
                  {feature.index}
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
                  {feature.title}
                </h2>
                <p className="mt-3 text-lg text-ink/70">{feature.description}</p>
              </div>

              <div className="flex-1 rounded-2xl border-[3px] border-black bg-white p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]">
                <span className="text-6xl font-bold text-ink/10">
                  {feature.index}
                </span>
                <p className="mt-4 text-xl font-bold tracking-tight text-ink">
                  {feature.title}
                </p>
                <span className="mt-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  {feature.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Projects
          </h2>
          <p className="mt-3 text-lg text-ink/70">
            Built with this framework — more shipping soon.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="marquee-fade overflow-hidden">
            <div className="flex w-max gap-6 motion-safe:animate-[marquee-left_32s_linear_infinite] motion-safe:hover:[animation-play-state:paused]">
              {[...projects, ...projects].map((_, i) => (
                <div key={i} className={projectCardClass}>
                  <span className="font-bold">Coming soon</span>
                </div>
              ))}
            </div>
          </div>

          <div className="marquee-fade overflow-hidden">
            <div className="flex w-max gap-6 motion-safe:animate-[marquee-right_32s_linear_infinite] motion-safe:hover:[animation-play-state:paused]">
              {[...projects, ...projects].map((_, i) => (
                <div key={i} className={projectCardClass}>
                  <span className="font-bold">Coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
