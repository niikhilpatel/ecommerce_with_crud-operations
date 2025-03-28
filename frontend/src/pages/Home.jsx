import React from 'react'
import Hero from '../components/Hero'
import Suggestions from '../components/Suggestions'
import Category from '../components/Category'
import GearUp from '../components/GearUp'
import Celebrity from '../components/Celebrity'
import HimHerPage from '../components/HimHerPage'

const Home = () => {
  return (
    <>
      <Hero />
      <HimHerPage/>
      <Category/>
      {/* <Suggestions /> */}
      <GearUp />
      <Celebrity/>
    </>
  )
}

export default Home