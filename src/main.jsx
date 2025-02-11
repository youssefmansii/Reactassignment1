import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Top from './components/Top.jsx'
import SecondTop from './components/SecondTop.jsx'

import SecondBottom from './components/SecondBottom.jsx'
import Third from './components/Third.jsx'


createRoot(document.getElementById('root')).render(
  <div className="bg-white">
    <Header />
    <SecondTop/>
    <SecondBottom/>
    <Third/>

    
    </div>
  
  
)
