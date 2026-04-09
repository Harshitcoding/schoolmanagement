const express = require('express');
const Task = require('../models/Task');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.use(protect);


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('student', 'name rollNumber class').sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/', async (req, res) => {
  const { title, description, student, dueDate, subject } = req.body;
  if (!title || !student) {
    return res.status(400).json({ message: 'Title and student are required' });
  }
  try {
    const task = await Task.create({ title, description, student, dueDate, subject });
    const populated = await task.populate('student', 'name rollNumber class');
    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.patch('/:id/toggle', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    task.completed = !task.completed;
    await task.save();
    const populated = await task.populate('student', 'name rollNumber class');
    res.json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
