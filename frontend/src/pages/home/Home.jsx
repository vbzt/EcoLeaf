import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Galery from './components/Galery'
import Testimonials from './components/Testimonials'
import PlantCare from './components/PlantCare'
import Faqs from './components/Faqs'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Galery></Galery>
      <Testimonials></Testimonials>
      <PlantCare></PlantCare>
      <Faqs></Faqs>
    </>
  )
}

export default Home
