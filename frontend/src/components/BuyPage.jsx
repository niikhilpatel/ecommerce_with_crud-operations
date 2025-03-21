import React from "react";
import { useLocation } from "react-router-dom";

const BuyPage = () => {
    const location = useLocation();
    const item = location.state?.item;

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="p-5">
            <div className="flex gap-5 items-center">
                <h2 className="text-xl font-bold mb-4">Few steps away from the purchase</h2>
                <button onClick={handleGoBack} className="bg-green-700 text-white px-2 py-1 rounded-lg">Go Back</button>
            </div>
            {item ? (
                <div className="flex justify-between m-10">
                    <div>
                        <h3 className="font-bold mb-3 text-4xl">{item.title}</h3>
                        <div className="flex gap-5">
                            <img src={item.image} alt={item.title} className="w-1/3 rounded-md" />
                            <p className="mt-2">{item.description}</p>
                        </div>
                    </div>

                    <div>
                        <p>Quantity : {item.quantity}</p>
                        <p className="font-bold">Rs. {item.price}</p>
                        <button className="bg-green-600 text-white p-2 rounded-lg mt-3">Proceed to Payment</button>

                    </div>
                </div>
            ) : (
                <p>No item selected for purchase.</p>
            )}
        </div>
    );
};

export default BuyPage;
