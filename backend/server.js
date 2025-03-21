const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/shoesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
