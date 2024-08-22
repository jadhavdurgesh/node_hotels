const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/menu");

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("menu data saved");
    res.status(200).json(data);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: " we get error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("menu data saved");
    res.status(200).json(data);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: " we get error" });
  }
});

module.exports = router;
