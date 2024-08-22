const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menu");

// GET route to fetch all menu items
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Menu data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching menu data");
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST route to add a new menu item
router.post("/", async (req, res) => {
  try {
    const newItemData = req.body; // Data sent from the client
    const newItem = new MenuItem(newItemData); // Create a new instance of MenuItem
    const savedItem = await newItem.save(); // Save to the database
    console.log("Menu item added successfully");
    res.status(201).json(savedItem); // Send back the saved item as a response
  } catch (error) {
    console.log("Error adding menu item");
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
