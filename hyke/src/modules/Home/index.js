import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Features from '../../components/Features'

function Home() {
  return (
    <section className="bg-white">
        <Hero/>
        <Products/>
    </section>
  )
}

export default Home