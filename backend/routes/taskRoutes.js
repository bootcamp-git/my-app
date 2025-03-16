const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.post('/tasks', async (req, res) => {
  const { description } = req.body;
  const newTask = await Task.create({ description });
  res.json(newTask);
});

router.delete('/tasks/:id', async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Task deleted' });
});

module.exports = router;
