import React from "react"
import Continuation from "../components/Continuation"
import ClosureNotice from "../components/ClosureNotice"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <main id="main" className="main">
        <ClosureNotice />
        <Continuation />
      </main>
      <Footer />
    </>
  )
}
