
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingDock from './components/FloatingDock'

export default function Home() {
  return (
    <main>
      
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FloatingDock />
    </main>
  )
}