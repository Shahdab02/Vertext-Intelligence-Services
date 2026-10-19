import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Awards from './Pages/Awards/Awards'
import Contact from './Pages/Contact/Contact'
import Faq from './Pages/FAQ/Faq'
import FounderPage from './Pages/Founder/FounderPage'
import Home from './Pages/Home/Home'
import Media from './Pages/Media/Media'
import OurService from './Pages/OurServices/OurService'
import ServicePageRoute from './Pages/OurServices/ServicePageRoute'
import Layout from './Components/Layout/Layout'

const App = () => {
  const [theme, setTheme] = useState(
    () => (localStorage.getItem('vertex-theme') === 'light' ? 'light' : 'dark'),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('vertex-theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              theme={theme}
              onToggleTheme={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'dark' ? 'light' : 'dark',
                )
              }
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="founder" element={<FounderPage />} />
          <Route path="media" element={<Media />} />
          <Route path="our-services" element={<OurService />} />
          <Route path="our-services/:serviceId" element={<ServicePageRoute />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App