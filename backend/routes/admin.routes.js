const express = require("express");
const { getUsers, deleteUser, makeAdmin } = require("../controllers/admin.controller");
const router = express.Router();

// No auth, open routes
router.get("/users", async (req, res) => {
    // Fetch users from database
    res.json([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" }
    ]);
  });router.delete("/user/:id", deleteUser);
router.put("/user/:id/make-admin", makeAdmin);

module.exports = router;
