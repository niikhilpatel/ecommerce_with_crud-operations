import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialItem = location.state?.item ? { ...location.state.item, quantity: location.state.item.quantity || 1, total: (location.state.item.quantity || 1) * location.state.item.price } : null;
    const [item, setItem] = useState(initialItem);

    const handleGoBack = () => {
        window.history.back();
    };

    const increaseQuantity = () => {
        setItem(prevItem => ({ ...prevItem, quantity: prevItem.quantity + 1, total: (prevItem.quantity + 1) * prevItem.price }));
    };

    const decreaseQuantity = () => {
        if (item.quantity > 1) {
            setItem(prevItem => ({ ...prevItem, quantity: prevItem.quantity - 1, total: (prevItem.quantity - 1) * prevItem.price }));
        }
    };

    const removeItem = () => {
        setItem(null);
    };

    return (
        <div className="p-5">
            <div className="flex gap-5 items-center">
                <h2 className="text-xl font-bold">Few steps away from the purchase</h2>
                <button onClick={handleGoBack} className="bg-green-700 text-white px-2 py-1 rounded-lg">Go Back</button>
            </div>
            {item ? (
                <div className="flex justify-between m-10">
                    <div>
                        <h3 className="font-bold mb-3 text-4xl">{item.title}</h3>
                        <div className="flex gap-5">
                            <img src={item.image} alt={item.title} className="w-2/3 rounded-xl" />
                            <p className="mt-2 text-2xl font-semibold">{item.description}</p>
                        </div>
                    </div>

                    <div className="mr-10">
                        <p>Quantity: {item.quantity}</p>
                        <p className="font-bold">Rs. {item.total}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <button onClick={decreaseQuantity} className="bg-gray-300 px-2 py-1 rounded-lg">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={increaseQuantity} className="bg-gray-300 px-2 py-1 rounded-lg">+</button>
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-between font-semibold">

                                <h6>Select Size</h6>
                                <a href="https://www.nike.com/in/size-fit/unisex-footwear-mens-based">Size Chart</a>
                            </div>
                            <ul className="grid grid-cols-2 gap-2 cursor-pointer mt-2">
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 6</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 7</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 8</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 9</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 10</li>
                            </ul>
                        </div>
                        <button onClick={() => createRazorpayOrder(100)} className="bg-green-600 text-white p-2 rounded-lg mt-3">Proceed to Payment</button>
                        {responseId && <p>{responseId}</p>}
                        <form onSubmit={paymentFetch}>
                            <input type="text" name="paymentId"/>
                            <button type="submit">Fetch Payment</button>
                            {responseState.length !== 0 && (
                                <ul>
                                    <li>Amount: {response.amount /100} Rs.</li>
                                    <li>Currency: {response.currency}</li>
                                    <li>Status: {response.status}</li>
                                    <li>Method: {response.method}</li>
                                </ul>
                            )}
                            
                        </form>
                        <button onClick={removeItem} className="bg-red-600 text-white px-3 py-1 rounded-lg mt-3 ml-2">Remove Item</button>
                    </div>
                </div>
            ) : (
                <p>No item selected for purchase.</p>
            )}
        </div>
    );
};

export default BuyPage;
