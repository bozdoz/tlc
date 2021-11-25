import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Header from "../components/Header"
import Services from "../components/Services"
import Specials from "../components/Specials"

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <main id="main" className="main">
        <Services />
        <Specials />
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  )
}
