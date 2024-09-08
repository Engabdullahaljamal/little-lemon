import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import CardsContainer from './component/CardsContainer/CardsContainer'
import Footer from './component/Footer/Footer'
import MenuCard from './component/MenuCard/MenuCard'
import MenuCardContainer from './component/MenuCardContainer/MenuCardContainer'
import About from './component/About/About'
import Reservation from './Pages/Reservation/Reservation'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/Our_menu' element={<MenuCardContainer />} />
        <Route path='/About' element={<About />} />
        <Route path='/Features' element={<CardsContainer  />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
