import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import {MoviesSection} from './components/MoviesSection.tsx'
import {DetailPage} from './components/pages/DetailPage.tsx'
import { Shell } from './components/shell/Shell.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
    <Route path='/' element={<Shell />}>
    <Route index element = {<MoviesSection />}/>
    <Route path='movies/:id' element ={<DetailPage />}/>
    </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
