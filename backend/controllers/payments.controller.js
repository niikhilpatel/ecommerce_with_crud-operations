const { createRazorpayInstance } = require("../config/razor.config");
const crypto = require("crypto");
require("dotenv").config();

const razorpayInstance = createRazorpayInstance();

exports.createOrder = async (req, res) => {
    const { amount } = req.body; // Corrected: Always fetch amount from DB in production

    const options = {
        amount: amount * 100, // Razorpay uses paise, so multiply by 100
        currency: "INR",
        receipt: `receipt_order_${Date.now()}`,
    };

    try {
        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json({ success: false, message: "Something went wrong" });
            }
            return res.status(200).json(order);
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

exports.verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET;

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(`${order_id}|${payment_id}`);

    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === signature) {
        return res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
        return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
};
