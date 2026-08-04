
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />

      <div className="main" id="main-content">
        <Home />
        <AboutMe />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
