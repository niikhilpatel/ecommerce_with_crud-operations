import React from 'react'
import Hero from '../components/Hero'
import Suggestions from '../components/Suggestions'
import Category from '../components/Category'
import GearUp from '../components/GearUp'

const Home = () => {
  return (
    <>
      <Hero />
      <Category/>
      {/* <Suggestions /> */}
      <GearUp />
    </>
  )
}

export default Home