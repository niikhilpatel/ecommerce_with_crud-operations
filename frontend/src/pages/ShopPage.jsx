import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const { addToCart, cart, removeFromCart } = useCart();
    const navigate = useNavigate();

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

    const buyNow = (item) => {
        navigate(`/buy/${item._id}`, { state: { item } });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
            <div>
              <ul className="flex gap-5 p-2">
                <li>Sort by</li>
                <li>Popularity</li>
                <li>Price - Low to High</li>
                <li>Price - High to Low</li>
                <li>Relevance</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <div key={card._id} className="bg-white shadow-lg rounded-lg p-5 text-center flex flex-col justify-between items-center">
                        <img src={card.image} alt={card.title} className="w-full h-56 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-semibold">{card.title}</h2>
                        <p className="text-gray-600">{card.description}</p>
                        <p className="text-lg font-bold mt-2">Rs. {card.price}</p>
                        
                        {/* <div className="flex justify-center items-center gap-4 mt-4">
                            <button className="bg-gray-300 text-black px-3 py-2 rounded-lg" onClick={() => removeFromCart(card)}>
                                -
                            </button>
                            <span className="text-lg font-semibold">{cart.find((item) => item._id === card._id)?.quantity || 0}</span>
                            <button className="bg-gray-300 text-black px-3 py-2 rounded-lg" onClick={() => addToCart(card)}>
                                +
                            </button>
                        </div> */}

                        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition" onClick={() => buyNow(card)}>
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
