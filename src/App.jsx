
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Service from './Components/Services/Service'
import Qualification from './Components/Qualification/Qualification'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
function App() {
  
  return (
    <div className='body'>
    <Header />
      <main className='main'>
        <Hero />
        <About/>
        <Skills/>
        <Service/>
        <Qualification/>
        <Testimonial/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
