const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Make a user admin
exports.makeAdmin = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { isAdmin: true });
        res.json({ message: "User promoted to Admin" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
