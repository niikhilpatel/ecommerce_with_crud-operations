import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BuyPage = () => {
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const onPayment = async (price, itemName) => {
        try {
            // CORRECTED URL
            const res = await axios.post("http://localhost:5000/api/payments/createOrder", { amount: price });
            const data = res.data;

            if (!window.Razorpay) await loadScript("https://checkout.razorpay.com/v1/checkout.js");

            const options = {
                key: "rzp_test_rxZrYzXPmiXGFy", // Test Key ID
                amount: price * 100,
                currency: "INR",
                name: itemName,
                order_id: data.id,
                handler: async function (response) {
                    // CORRECTED URL
                    const verificationRes = await axios.post("http://localhost:5000/api/payments/verifyPayment", {
                        order_id: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                    });

                    if (verificationRes.data.success) {
                        alert("🎉 Payment Successful!");
                    } else {
                        alert("❌ Payment Failed!");
                    }
                },
                theme: { color: "#3399cc" },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error("Error processing payment", error);
        }
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const initialItem = location.state?.item
        ? { ...location.state.item, quantity: location.state.item.quantity || 1, total: (location.state.item.quantity || 1) * location.state.item.price }
        : null;
    const [item, setItem] = useState(initialItem);

    const deleteProduct = async () => {
        if (!item) return;

        try {
            await axios.delete(`http://localhost:5000/api/cards/${item._id}`);
            alert("Product deleted successfully!");
            navigate("/shop");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product.");
        }
    };

    return (
        <div className="p-5 h-screen">
            <h2 className="text-xl font-bold">Few steps away from the purchase</h2>
            {item ? (
                <div className="mt-10 flex flex-col justify-between md:flex-row">
                    <div className="flex justify-around gap-10">
                        <div>
                            <h3 className="font-bold mb-3 text-4xl">{item.title}</h3>
                            <img src={item.image} alt={item.title} className="w-2/3 rounded-xl mt-7" />
                        </div>
                        <div className="space-y-5">
                            <p className="mt-2 text-2xl font-semibold">{item.description}</p>
                            <p className="font-bold">Rs. {item.total}</p>
                        </div>
                    </div>
                    <div className="space-y-5 mr-15 gap-5">
                        <div className="flex justify-between font-semibold">
                            <h6>Select Size</h6>
                            <a href="https://www.nike.com/in/size-fit/unisex-footwear-mens-based" className="text-red-400">Size Chart</a>
                        </div>
                        <div>
                            <ul className="grid grid-cols-2 gap-2 cursor-pointer mt-2">
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 6</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 7</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 8</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 9</li>
                                <li className="border-1 border-blue-200 rounded-xl p-1 text-center hover:bg-blue-200">UK 10</li>
                            </ul>
                        </div>
                        <div className="space-x-3">
                        <button onClick={() => onPayment(item.total, item.title)} className="bg-green-600 text-white p-2 rounded-lg mt-3">
                            Proceed to Payment
                        </button>
                        <button onClick={deleteProduct} className="bg-red-600 text-white p-2 rounded-lg mt-3">
                            Delete Product
                        </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No item selected for purchase.</p>
            )}
        </div>
    );
};

export default BuyPage;
