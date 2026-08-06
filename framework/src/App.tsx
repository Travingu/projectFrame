const features = [
  {
    title: 'Fast',
    description:
      'Built on Vite and the React Compiler for instant HMR and optimized production builds out of the box.',
  },
  {
    title: 'Flexible',
    description:
      'A minimal starting point with no opinionated abstractions — add only what your project actually needs.',
  },
  {
    title: 'Modern',
    description:
      'TypeScript, Tailwind CSS, and Oxlint configured from the start so you can skip the boilerplate setup.',
  },
]

const upcoming = Array.from({ length: 6 })

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
        <div className="pt-8 pb-14 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            PROJECT FRAME
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent">
            a starter framework by Travis
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border-[3px] border-black bg-white p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
            >
              <h2 className="text-3xl font-bold tracking-tight text-ink">
                {feature.title}
              </h2>
              <p className="mt-3 text-lg text-ink/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((_, i) => (
            <div
              key={i}
              className="flex aspect-4/3 flex-col items-center justify-center rounded-2xl border-[3px] border-black bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
            >
              <span className="font-bold">Coming soon</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
