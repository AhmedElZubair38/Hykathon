import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import Features from '../../components/Features'

function Home() {
  return (
    <>
        <Hero/>
        <h2 className="text-center text-5xl mt-12">Products</h2>
        <Products/>
        <Features/>
    </>
  )
}

export default Home