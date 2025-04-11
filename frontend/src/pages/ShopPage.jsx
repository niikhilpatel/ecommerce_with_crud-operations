import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cards = () => {
    const { addToCart, cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [sortOption, setSortOption] = useState("popularity");

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/cards");
            setCards(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSort = (option) => {
        setSortOption(option);
        let sortedCards = [...cards];

        switch (option) {
            case 'priceAsc':
                sortedCards.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sortedCards.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                sortedCards.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
                break;
            case 'relevance':
                sortedCards.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
                break;
            default:
                break;
        }

        setCards(sortedCards);
    };

    const buyNow = (item) => {
        navigate(`/buy/${item._id}`, { state: { item } });
    };

    const goToCart = () => {
        navigate("/cart");
    }


    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>

            {/* Sort Options */}
            <div className="flex justify-center mb-6">
                <select
                    value={sortOption}
                    onChange={(e) => handleSort(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="relevance">Relevance</option>
                </select>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cards.map((card) => (
                    <div
                        key={card._id}
                        className="flex flex-col justify-between bg-white rounded shadow hover:shadow-lg transition"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-72 object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2 px-4">{card.title}</h2>
                        <p className="text-gray-600 mb-4 px-4">{card.description}</p>
                        <div className="flex justify-between items-center  pb-4 px-4">
                            <span className="text-lg font-bold">Rs. {card.price}</span>
                            <div className="flex space-x-2">
                                {/* <button
                                    onClick={() => goToCart()}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Add to Cart
                                </button> */}
                                <button
                                    onClick={() => buyNow(card)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
