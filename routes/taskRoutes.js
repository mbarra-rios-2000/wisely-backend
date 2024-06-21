const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rutas CRUD para tareas
router.get('/', taskController.getAllTasks); // Get all tasks
router.post('/', taskController.createTask); // Create a new task
router.put('/:id', taskController.updateTask); // Update a task
router.delete('/:id', taskController.deleteTask); // Delete a task

module.exports = router;
