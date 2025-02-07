import React from 'react'
import { Header } from '../includes/Header'
import Footer from '../includes/Footer'
import AboutMe from '../sections/AboutMe'
import AbouteMeExtra from "../sections/AbouteMeExtra"

const AboutMePage = () => {
  return (
    <>
      <Header />
      <AboutMe hideLearnMore={false} />
      <AbouteMeExtra />
      <Footer />
    </>
  )
}

export { AboutMePage }
