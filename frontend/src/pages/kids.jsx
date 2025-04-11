import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ For navigation

const KidsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // ✅ Hook to navigate

  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards?category=kids');
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.products) {
          setProducts(response.data.products);
        } else {
          console.error('Unexpected API response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching kids products:', error);
      }
    };

    fetchKidsProducts();
  }, []);

  // ✅ Function to handle "Buy" button click
  const handleCheckDetails = (item) => {
    navigate(`/buy/${item._id}`, { state: { item } });
  };

  return (
    <div className="px-20 py-5">
      <h1 className="text-3xl font-bold mb-5">Kids' Section</h1>

      <div className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Trendy and Comfy Footwear for Kids</h2>
        <p>Shop the latest stylish and durable shoes designed especially for kids.</p>
        <p>Our collection focuses on playful designs, comfort, and everyday adventures.</p>
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

              {/* ✅ Buy Button */}
              <button
                onClick={() => handleCheckDetails(product)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No products available for kids.</p>
        )}
      </div>
    </div>
  );
};

export default KidsPage;
