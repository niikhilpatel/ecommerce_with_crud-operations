const express = require("express");
const Card = require("../models/Card");

const router = express.Router();

// Get All Cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a New Card
router.post("/", async (req, res) => {
  try {
    const { title, description, image, price } = req.body;
    const newCard = new Card({ title, description, image, price });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating card" });
  }
});

// Delete a Card
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not delete item" });
  }
});

module.exports = router;
