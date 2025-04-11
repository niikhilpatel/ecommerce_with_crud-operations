import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Football = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFootballProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards?gear=football');
                console.log('Football API Response:', response.data);

                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else if (response.data.products) {
                    setProducts(response.data.products);
                } else {
                    console.error('Unexpected API response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching football products:', error);
            }
        };

        fetchFootballProducts();
    }, []);

    const handleCheckDetails = (item) => {
        navigate(`/buy/${item._id}`, { state: { item } });
    };

    return (
        <div className="px-20 py-5">
            <h1 className="text-3xl font-bold mb-5">Football Gear</h1>

            <div className="space-y-2 mb-8">
                <h2 className="text-xl font-semibold">Kick Off with the Best Football Gear</h2>
                <p>Explore our latest collection of football boots, jerseys, and equipment for every level of play.</p>
                <p>Dominate the field with premium quality products tailored for football enthusiasts.</p>
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
                            <button
                                onClick={() => handleCheckDetails(product)}
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
                            >
                                Buy Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-4 text-gray-500">No football products available.</p>
                )}
            </div>
        </div>
    );
};

export default Football;
