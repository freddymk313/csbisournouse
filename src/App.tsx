
import './App.css'
import { OptionSection } from './components/Option'
import { ContactSection } from './components/Contact'
import { FAQSection } from './components/Faq'
import { GallerySection } from './components/Gallery'
import Hero from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { ServicesSection } from './components/Services'

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OptionSection />
      <ServicesSection />
      {/*  */}


      <GallerySection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

export default App
