
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AcceuilPage from './pages/AcceuilPage'
import GaleriePage from './pages/GaleriePage'
import OptionsPage from './pages/OptionsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AcceuilPage />} />

        <Route path="/options" element={<OptionsPage />} />
        <Route path="/galerie" element={<GaleriePage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
