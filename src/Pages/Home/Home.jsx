import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Hero from '../../component/Hero/Hero'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import MenuCardContainer from '../../component/MenuCardContainer/MenuCardContainer'
import About from '../../component/About/About'
import Footer from '../../component/Footer/Footer'


function Home() {
    return (
        <>

            <Hero />
            <CardsContainer />
            <MenuCardContainer />
            <About />
        </>
    )
}

export default Home