import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="p-5">
            <h2 className="flex items-center justify-center mb-5 font-bold text-3xl">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cart.map((item) => (
                        <div key={item.id} className="border-2 border-gray-200 p-5 m-2">
                            <img src={item.image} alt={item.title} className="w-full h-2/3 object-cover rounded-md" />
                            <h2 className="mt-2">{item.title}</h2>
                            <p className="mt-1 font-bold">Rs. {item.price}</p>

                            <button
                                className="bg-red-400 text-white p-2 rounded-lg mt-2"
                                onClick={() => removeFromCart(item)}
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

export default CartPage;
