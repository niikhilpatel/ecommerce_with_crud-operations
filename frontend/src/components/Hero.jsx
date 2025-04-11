import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sign from './Sign';
import HeroImg1 from "../assets/Home 1.avif";
import HeroImg2 from "../assets/Home2.avif"

const Category = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className=" flex flex-col pt-5 justify-center items-center px-2 md:px-10 md:pt-15">
      <div className="relative ">
        <img
          src={HeroImg1}
          alt="Nike Just Do It"
          className="invisible md:visible w-full h-auto object-none rounded-lg shadow-lg"
        />
        <img
          src={HeroImg2}
          alt="Nike Just Do It"
          className="md:hidden w-full h-auto object-none rounded-lg shadow-lg"
        />
        <button
          onClick={() => navigate('/shop')}
          className="absolute bottom-5 right-70  md:bottom-35 md:right-30 transform text-2xl bg-white text-black py-5 px-16 rounded-full border-2 border-yellow-400 font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Shop
        </button>
      </div>
      <div className='hidden md:visible md:absolute  md:right-15'>
        <Sign/>
      </div>
    </div>
  );
};

export default Category;
