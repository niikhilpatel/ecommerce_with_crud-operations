import React from 'react'
import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Suggestions from '../components/Suggestions'
import Category from '../components/Category'

const Home = () => {
  return (
    <>
      <Hero />
      <Category/>
      <Suggestions />
      <Cards />
    </>
  )
}

export default Home