import Page from './components/Page'
import { projects } from './data/projects'

export default function App() {
  return (
    <Page
      current="Projects"
      lead="Software and hardware I’ve built, from SEC financial tools to a line-following robot."
      entries={projects}
    />
  )
}
