
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AcceuilPage from './pages/AcceuilPage'
import GaleriePage from './pages/GaleriePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AcceuilPage />} />

        <Route path="/galerie" element={<GaleriePage />} />
        
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
