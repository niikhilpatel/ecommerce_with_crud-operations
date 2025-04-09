import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HerPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMaleProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards?category=female');
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.products) {
          setProducts(response.data.products);
        } else {
          console.error('Unexpected API response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching male products:', error);
      }
    };

    fetchMaleProducts();
  }, []);

  return (
    <div className="px-20 py-5">
      <h1 className="text-3xl font-bold mb-5">Women's Section</h1>

      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Shoes for Men: Trendy, Durable & Comfortable</h2>
        <p>Find the perfect shoes for men that balance durability, fashion, and ease of wear.</p>
        <p>Our collection of shoes for men ensures a stylish and comfortable experience every day.</p>
      </div>

      <ul className="flex gap-5 text-lg font-semibold mb-10">
        <li>Sort by:</li>
        <li className="cursor-pointer hover:text-blue-500">Low - High</li>
        <li className="cursor-pointer hover:text-blue-500">High - Low</li>
        <li className="cursor-pointer hover:text-blue-500">Popularity</li>
        <li className="cursor-pointer hover:text-blue-500">Relevance</li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-green-600 font-bold mt-2">Rs. {product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HerPage;
