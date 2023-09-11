import React from 'react'
import Hero from './Hero'
import RealState from './RealState'
import Inverti from './Inverti'
import Potencial from './Potencial'
import Pasos from './Pasos'
import Equipo from './Equipo'
import Preguntas from './Preguntas'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <RealState />
      {/* <Inverti /> */}
      <Potencial />
      <Pasos />
      {/* <Equipo /> */}
      <Preguntas />
      <Footer />
    </>
  )
}

export default Home