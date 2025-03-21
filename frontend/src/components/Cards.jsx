import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // To navigate to the buy page

const Cards = () => {
    const [cards, setCards] = useState([]); // Store all products
    const [cart, setCart] = useState([]); // Store items in the cart
    const navigate = useNavigate();

    // Fetch data from MongoDB
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

    // Add item to cart
    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
            // Increase quantity if item already exists
            setCart(
                cart.map((cartItem) =>
                    cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            // Add new item to cart
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem._id === item._id);
        if (existingItem.quantity === 1) {
            setCart(cart.filter((cartItem) => cartItem._id !== item._id));
        } else {
            setCart(
                cart.map((cartItem) =>
                    cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                )
            );
        }
    };

    // Buy Now - Navigate to Buy Page
    const buyNow = (item) => {
        navigate(`/buy/${item._id}`, { state: { item } }); // Navigate to Buy page with item data
    };

    return (
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cards.map((card) => (
                    <div key={card._id} className="border-2 border-gray-200 p-5 m-2">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-2/3 object-cover rounded-md"
                        />
                        <h2 className="mt-2">{card.title}</h2>
                        <p className="text-sm text-gray-700">{card.description}</p>
                        <p className="mt-1 font-bold">Rs. {card.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex justify-between ">

                            <div className="mt-1 flex items-center">
                                <button
                                    className="bg-gray-300 text-black p-1 rounded-l-lg"
                                    onClick={() => removeFromCart(card)}
                                >
                                    -
                                </button>
                                <span className="mx-2">
                                    {cart.find((item) => item._id === card._id)?.quantity || 0}
                                </span>
                                <button
                                    className="bg-gray-300 text-black p-1 rounded-r-lg"
                                    onClick={() => addToCart(card)}
                                >
                                    +
                                </button>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-x-4 lg:space-x-2 mt-2 flex lg:text-sm">
                                <button
                                    className="bg-purple-400 text-white p-2 rounded-lg"
                                    onClick={() => buyNow(card)}
                                >
                                    Buy now
                                </button>
                                <button
                                    className="bg-sky-400 text-white p-2 rounded-lg"
                                    onClick={() => addToCart(card)}
                                >
                                    Add to cart
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
