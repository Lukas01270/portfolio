import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/skills'
import Contact from './components/Contacs'
import Experience from './components/Experience'

function App() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export default App