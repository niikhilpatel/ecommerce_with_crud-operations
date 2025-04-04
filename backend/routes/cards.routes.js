const express = require("express");
const Card = require("../models/Card");

const router = express.Router();

// Get All Cards
router.get("/", async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Add a New Card
router.post("/", async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const newCard = new Card({ title, description, image });
        await newCard.save();
        res.json(newCard);
    } catch (error) {
        res.status(500).json({ error: "Could not add item" });
    }
});

// Delete a Card
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Card.findByIdAndDelete(id);
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Could not delete item" });
    }
});

module.exports = router;
