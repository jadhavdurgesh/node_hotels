const express = require("express");
const app = express();
const db = require("./db"); // Ensure this connects to MongoDB properly
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(bodyParser.json()); // or app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome back to server js file");
});

// Import routes
const menuItemRoutes = require("./routes/menuRoutes");
const personRoute = require("./routes/personRoutes");
const { config } = require("dotenv");

// Use routes
app.use("/menu", menuItemRoutes);
app.use("/person", personRoute);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


// Start the server
app.listen(3000, () => console.log("Server is live on http://localhost:3000"));
