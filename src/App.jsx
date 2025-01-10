import './App.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Projects from './Projects.jsx'

function App() {
  return (
    <>
      <section className="flex flex-col bg-[url('./assets/heroBG.jpg')] bg-center xl:bg-cover h-screen min-h-fit overflow-auto">
        <Nav />
        <Hero />
      </section>
      <Projects />
    </>
  )
}

export default App
