
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
