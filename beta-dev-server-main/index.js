// Import necessary packages
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const ProtectedRoute = require("./routes/ProtectedRoute");


const app = express();
const PORT = process.env.PORT || 3000; // Use the port from the environment variables

// Middlewares
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Beta Home Server" });
});
app.use("/api/v1", userRouter); // Use the user router for API requests

// Error route for undefined routes
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// Database connection and server startup
const startServer = async () => {
  try {
    // Connect to MongoDB using the URL from environment variables
    const mongoUrl = `${process.env.MONGO_URL}${process.env.DB_NAME}`;
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

// Start the server
startServer();
