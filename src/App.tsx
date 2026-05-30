import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/skills'
import Contact from './components/Contacs'
import Experience from './components/Experience'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <main className="max-w-6xl mx-auto px-8 text-white">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App