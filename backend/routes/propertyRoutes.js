const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const multer = require('multer');
const path = require('path');

// 📁 Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage });

// ✅ POST route with file upload
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { name, type, department, quantity, location, condition } = req.body;
    const filePath = req.file ? req.file.path : null;

    const property = new Property({
      name,
      type,
      department,
      quantity,
      location,
      condition,
      filePath  // Store the file path in MongoDB
    });

    await property.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET: Fetch all properties
router.get("/all", async (req, res) => {
  try {
    const properties = await Property.find().populate("department", "name");
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch properties" });
  }
});

// ✅ DELETE: Remove property by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Property.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Property not found" });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
