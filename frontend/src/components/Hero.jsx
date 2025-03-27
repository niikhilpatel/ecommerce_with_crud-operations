import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10 pb-20 pt-10">
      {/* Image Container */}
      <div className="relative shadow-lg">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_1546,c_limit/6de75a94-187f-481e-9f36-9e3f367e795f/nike-just-do-it.jpg"
          alt="Nike Just Do It"
          className="w-full h-auto rounded-lg"
        />
        {/* Shop Button */}
        <button
          onClick={() => navigate('/shop')}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-full border-2 border-yellow-400 font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default Category;
