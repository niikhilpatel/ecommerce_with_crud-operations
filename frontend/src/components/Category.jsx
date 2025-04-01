import React from 'react';

const Category = () => {
  return (
    <div className=" flex justify-center items-center gap-2 md:gap-10 px-2 md:px-10">
      {[
        {
          img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/61ce509f-c69b-4654-990b-9d577a7c12ff/nike-just-do-it.jpg",
          label: "Men's",
        },
        {
          img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/ab9307ec-8de2-4e47-a34c-4b5b2b8909b6/nike-just-do-it.jpg",
          label: "Women's",
        },
        {
          img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/e34de06d-cccb-48e0-be17-3126df0e632b/nike-just-do-it.jpg",
          label: "Kids",
        },
      ].map((category, index) => (
        <div key={index} className="relative shadow-lg w-96">
          <img src={category.img} alt={`${category.label} Category`} className="w-full h-auto rounded-lg" />
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 md:py-2 px-3 md:px-4 rounded-full border-2 border-yellow-400 font-semibold shadow-md hover:bg-gray-200 transition-all">
            {category.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
