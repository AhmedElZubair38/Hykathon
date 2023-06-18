import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Header from '../../components/Header';

function Home() {
  return (
    <section className="bg-beige">
        <Header/>
        <Hero/>
        <Products/>
    </section>
  )
}

export default Home