
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AcceuilPage from './pages/AcceuilPage'
import GaleriePage from './pages/GaleriePage'
import OptionsPage from './pages/OptionsPage'
import InscriptionPage from './pages/inscription/InscriptionPage'
import FormulaireInscriptionPage from './pages/inscription/FormulaireInscriptionPage'
import AproposPage from './pages/AproposPage'
import FAQPage from './pages/FaqPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AcceuilPage />} />

        <Route path="/options" element={<OptionsPage />} />
        <Route path="/galerie" element={<GaleriePage />} />

        <Route path="/apropos" element={<AproposPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/admissionform" element={<FormulaireInscriptionPage />} />
      </Routes>
    </>
  )
}

export default App
