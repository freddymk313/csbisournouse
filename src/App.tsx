
import './App.css'
import { OptionSection } from './components/Option'
import { ContactSection } from './components/Contact'
import { FAQSection } from './components/Faq'
import { GallerySection } from './components/Gallery'
import Hero from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { AcademicProgramsSection } from './components/AcademicProgram'

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OptionSection />
      <AcademicProgramsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

export default App
