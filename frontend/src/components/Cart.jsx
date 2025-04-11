import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className="p-5 min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid gap-4">
                    {cart.map((item) => (
                        <div
                            key={item._id || item.id} // fallback in case _id is missing
                            className="border p-4 rounded shadow bg-white flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">Price: ₹{item.price}</p>
                                <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
                            </div>
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
