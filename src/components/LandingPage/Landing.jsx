import React from 'react'
import Audience from './Audience'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Join from './Join'
import Memories from './Memories'

function Landing() {
  return (
    <section>
        <Header/>
        <Hero />
        <Audience/>
        <Memories />
        <Join/>
        <Footer />
    </section>
  )
}

export default Landing