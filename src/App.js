import './App.css'
import { HomePage } from './Pages/HomePage'
import { AboutMePage } from './Pages/AboutMePage'
import { ContactPage } from './Pages/ContactPage'
import { LinksPage } from './Pages/Linkspage'
import NotFoundPage from './Pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import { useEffect } from 'react'

function App() {
   // useEffect(() => {
   //    function disableRightClick(e) {
   //       e.preventDefault()
   //    }
   //    document.addEventListener('contextmenu', disableRightClick)
   //    return () => {
   //       document.removeEventListener('contextmenu', disableRightClick)
   //    }
   // }, [])

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/about" element={<AboutMePage />} />
               <Route exact path="/contact" element={<ContactPage />} />
               <Route exact path="/links" element={<LinksPage />} />
               <Route exact path="*" element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
