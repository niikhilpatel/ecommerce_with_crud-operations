import React from 'react';
import Hero from '../components/Hero';
import Category from '../components/Category';
import GearUp from '../components/GearUp';
import Celebrity from '../components/Celebrity';
import HimHerPage from '../components/HimHerPage';
import Subcriptions from '../components/Home/Subcriptions';

const Home = () => {
  return (
    <>
      <Hero />
      <HimHerPage />
      <Category />
      <GearUp />
      <Celebrity />
      <Subcriptions/>
    </>
  );
};

export default Home;
