// Modules
import { useRef } from "react"

// Components
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <>
      <Navbar 
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
      />

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Education ref={educationRef} />
      <Projects ref={projectsRef} />
    </>
  )
}

export default App
