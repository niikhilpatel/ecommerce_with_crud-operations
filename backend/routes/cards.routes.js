const express = require("express");
const Card = require("../models/Card");

const router = express.Router();

// Get Cards with Optional Category Filter
router.get("/", async (req, res) => {
  try {
    const { category } = req.query; // get category from URL query
    let filter = {};

    if (category) {
      filter.category = category; // { category: "male" }
    }

    const cards = await Card.find(filter); // filter if needed
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cards" });
  }
});

// Add a New Card
router.post("/", async (req, res) => {
  try {
    const { title, description, image, price, category, gear } = req.body;

    // Validate required fields
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    if (!["male", "female", "kids"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }
    if (!["none", "running", "training", "football", "basketball", "studio"].includes(gear)) {
      return res.status(400).json({ error: "Invalid gear" });
    }

    const newCard = new Card({ title, description, image, price, category, gear });
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

// Update a Card
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update item" });
  }
});

module.exports = router;
