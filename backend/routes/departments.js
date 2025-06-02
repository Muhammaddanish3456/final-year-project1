const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const Property = require('../models/Property');

// GET all departments with total assets
router.get('/', async (req, res) => {
  const departments = await Department.find();
  const data = await Promise.all(departments.map(async dept => {
    const assets = await Property.aggregate([
      { $match: { department: dept._id } },
      { $group: { _id: null, total: { $sum: "$quantity" } } }
    ]);
    return {
      ...dept.toObject(),
      totalAssets: assets[0]?.total || 0
    };
  }));
  res.json(data);
});

// POST create new department
router.post('/', async (req, res) => {
  const dept = new Department(req.body);
  await dept.save();
  res.json(dept);
});

// PUT update department
router.put('/:id', async (req, res) => {
  const updated = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE department
router.delete('/:id', async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
