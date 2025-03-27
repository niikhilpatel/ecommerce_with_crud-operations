import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    description: "Comfortable running shoes with premium cushioning.",
    price: "$120",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1a90cd58-c2bc-4ad5-83b1-f88c04ff5354/air-max-plus-drift-shoes-Bj5f4n.png",
  },
  {
    id: 2,
    name: "Nike Hoodie",
    description: "Warm and stylish hoodie for everyday wear.",
    price: "$80",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71932754-8ac0-4e3b-a8ec-392e1605708a/sportswear-tech-fleece-hoodie-Zdfb29.png",
  },
  {
    id: 3,
    name: "Nike Backpack",
    description: "Durable backpack with multiple compartments.",
    price: "$60",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a1683e11-8bb7-4677-9a7a-4082d885f558/heritage-backpack-Kw1M6v.png",
  },
];

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Shop Our Collection</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-5 text-center">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
            <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
