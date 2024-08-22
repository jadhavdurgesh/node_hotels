const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new Person(data);
    const savedUser = await newUser.save(); // Use async/await
    res.status(201).json(savedUser);
  } catch (error) {
    console.log("Error saving user data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all persons
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Person data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching person data");
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch persons by work type
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType }); // Await the result of the find query
      console.log("Response fetched successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log("Error fetching data by work type");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error fetching data by work type");
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
    try {
      const personId = req.params.id;
      console.log(`Attempting to delete person with ID: ${personId}`);
  
      const deletedPerson = await Person.findByIdAndDelete(personId);
  
      if (!deletedPerson) {
        console.log("Person not found");
        return res.status(404).json({ error: "Person not found" });
      }
  
      console.log("Person deleted successfully");
      res.json({ message: "Person deleted successfully" });
    } catch (error) {
      console.error("Error deleting person:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
module.exports = router;
