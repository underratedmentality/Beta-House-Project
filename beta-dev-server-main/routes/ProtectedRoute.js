const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware to check if user is authenticated
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(403).json({ err: "No token provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ err: "Invalid or expired token" });
    }
    req.user = decoded; // Add user data to request
    next();
  });
};

// Protected route example
router.get("/protected-route", authenticate, (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to the protected route!" });
});

module.exports = router;
