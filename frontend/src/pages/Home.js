import React from 'react'
import HomeNavbar from '../component/payHabib/Navbar'
import Banner from '../component/payHabib/Banner'
import Services from '../component/payHabib/Services'
import Solutions from '../component/payHabib/Solution'
import Pricing from '../component/payHabib/Pricing'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Banner />
      <Services />
      <Solutions />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home