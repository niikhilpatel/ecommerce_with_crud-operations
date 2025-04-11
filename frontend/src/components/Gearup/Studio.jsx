import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Studio = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudioProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards?gear=studio'); 
                console.log('Studio API Response:', response.data);

                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else if (response.data.products) {
                    setProducts(response.data.products);
                } else {
                    console.error('Unexpected API response format:', response.data);
                    setError('Unexpected API response format.');
                }
            } catch (error) {
                console.error('Error fetching studio products:', error);
                setError('Failed to load studio products. Please try again.');
            }
        };

        fetchStudioProducts();
    }, []);

    const handleCheckDetails = (item) => {
        navigate(`/buy/${item._id}`, { state: { item } });
    };

    const handleSort = (option) => {
        setSortOption(option);
        let sortedProducts = [...products];

        switch (option) {
            case 'priceAsc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                sortedProducts.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'relevance':
                // Assuming relevance based on some score, otherwise random
                sortedProducts.sort((a, b) => b.relevanceScore - a.relevanceScore);
                break;
            default:
                break;
        }

        setProducts(sortedProducts);
    };

    return (
        <div className="px-20 py-5">
            <h1 className="text-3xl font-bold mb-5">Studio Collection</h1>

            <div className="space-y-2 mb-8">
                <h2 className="text-xl font-semibold">Performance Studio Gear</h2>
                <p>Explore our latest studio collection designed for comfort, style, and performance.</p>
                <p>Perfect for yoga, dance, pilates, and everything in between.</p>
            </div>

            <ul className="flex gap-5 text-lg font-semibold mb-10">
                <li>Sort by:</li>
                <li onClick={() => handleSort('priceAsc')} className="cursor-pointer hover:text-blue-500">Low - High</li>
                <li onClick={() => handleSort('priceDesc')} className="cursor-pointer hover:text-blue-500">High - Low</li>
                <li onClick={() => handleSort('popularity')} className="cursor-pointer hover:text-blue-500">Popularity</li>
                <li onClick={() => handleSort('relevance')} className="cursor-pointer hover:text-blue-500">Relevance</li>
            </ul>

            {error && <div className="text-red-500 mb-5">{error}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product._id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer"
                            onClick={() => handleCheckDetails(product)}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-48 w-full object-cover rounded"
                            />
                            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
                        </div>
                    ))
                ) : (
                    !error && <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Studio;
