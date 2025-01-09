import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'

function App() {
  return (
    <>
      <section className="flex flex-col bg-[url('./assets/heroBG.jpg')] bg-center bg-blend-darken xl:bg-cover h-screen">
        <Nav />
        <Hero />
      </section>
    </>
  )
}

export default App
