import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
    const location = useLocation();
    const cart = location.state?.cart || [];

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item._id} className="border p-3 mb-3">
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
