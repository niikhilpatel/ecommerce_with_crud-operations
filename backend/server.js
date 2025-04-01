const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/shoesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.post('/orders', async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "order_rcptid_11",
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) { 
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/payment/:paymentId", async (req, res) => {
  const { paymentId } = req.params;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  
  try {
    const payment = await razorpay.payments.fetch(paymentId);

    if (!payment){
      return res.status(500).json("Error at razorpay loading");
    }

    res.json({
      status:payment.status,
      method:payment.method,
      amount:payment.amount,
      currency:payment.currency,
    });
  }
  catch (error) {
    res.status(500).json("Internal Server Error");
  }
});


// Define Schema
const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Card = mongoose.model("Card", cardSchema);

// API to Get Data
app.get("/api/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API to Add a New Card
app.post("/api/cards", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newCard = new Card({ title, description, image });
    await newCard.save();
    res.json(newCard);
  } catch (error) {
    res.status(500).json({ error: "Could not add item" });
  }
});

// API to Delete a Card
app.delete("/api/cards/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete item" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
