import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    {
      img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/61ce509f-c69b-4654-990b-9d577a7c12ff/nike-just-do-it.jpg",
      label: "himpage",
      displayLabel: "Men's",
    },
    {
      img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/ab9307ec-8de2-4e47-a34c-4b5b2b8909b6/nike-just-do-it.jpg",
      label: "herpage",
      displayLabel: "Women's",
    },
    {
      img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e34de06d-cccb-48e0-be17-3126df0e632b/nike-just-do-it.jpg",
      label: "kids",
      displayLabel: "Kids",
    },
  ];

  const handleCategoryClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mx-5 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 px-2 md:px-10">
        {categories.map((category, index) => (
          <div key={index} className="relative shadow-lg">
            <img src={category.img} alt={`Rs. {category.displayLabel} Category`} className="w-full md:h-auto rounded-lg" />
            <button
              onClick={() => handleCategoryClick(category.label)}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 md:py-2 px-3 md:px-4 rounded-full border-2 border-yellow-400 font-semibold shadow-md hover:bg-gray-200 transition-all"
            >
              {category.displayLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
