const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const paymentRoutes = require("./routes/payments.routes");
const cardRoutes = require("./routes/cards.routes");
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const errorHandler = require("./middleware/errorMiddleware");
const protect = require("./middleware/authMiddleware");

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/admin", adminRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// (Optional) Just for testing environment variables
console.log("JWT Secret Key:", process.env.JWT_SECRET);
