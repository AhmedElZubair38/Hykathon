import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Header from '../../components/Header';

function Home() {
  return (
    <section className="bg-white">
        <Header/>
        <Hero/>
        <Products/>
        {/* <Features/> */}
    </section>
  )
}

export default Home