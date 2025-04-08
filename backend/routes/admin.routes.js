const express = require("express");
const { getUsers, deleteUser, makeAdmin } = require("../controllers/admin.controller");
const router = express.Router();

// No auth, open routes
router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);
router.put("/user/:id/make-admin", makeAdmin);

module.exports = router;
