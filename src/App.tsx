
import './App.css'
import { AboutUsSection } from './components/AboutUs'
import { ContactSection } from './components/Contact'
import { GallerySection } from './components/Gallery'
import Hero from './components/Hero'
import { OptionsSection } from './components/Options'
import { ServicesSection } from './components/Services'

function App() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <OptionsSection />
      <ServicesSection />
      {/*  */}


      <GallerySection />
      <ContactSection />
    </>
  )
}

export default App
