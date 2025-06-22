import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import CV from "./sections/CV"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills";

function App() {

  return (
    <>
      <CustomCursor/>
      <Navbar/>
      <Hero />
      <Projects/>
      <Skills />
      <CV/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App