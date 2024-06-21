const Task = require('../models/task');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
    try {
        // Se utiliza await para esperar a que la operación asincrónica termine
        const tasks = await Task.findAll();
        res.json(tasks); // Devuelve las tareas en formato JSON
    } catch (error) {
        // 500: Error interno del servidor 
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva tarea 
exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        // Se utiliza await para esperar a que la operación asincrónica termine
        const newTask = await Task.create({ title, description, status });
        // 201: Recurso creado
        res.status(201).json(newTask);
    } catch (error) {
        // 500: Error interno del servidor 
        res.status(500).json({ error: error.message });
    } 
}

// Actualizar una tarea existente 
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        // Se utiliza await para esperar a que la operación asincrónica termine
        const task = await Task.findByPk(id);

        if (!task) {
            // 404: Recurso no encontrado
            return res.status(404).json({ error: 'Task not found' });
        }

        // Actualizar los campos de la tarea
        task.title = title;
        task.description = description;
        task.status = status;
        await task.save(); // Guardar los cambios

        res.json(task); // Devuelve la tarea actualizada en formato JSON
    } catch (error) {
        // 500: Error interno del servidor 
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una tarea 
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        // Se utiliza await para esperar a que la operación asincrónica termine
        const task = await Task.findByPk(id);

        if (!task) {
            // 404: Recurso no encontrado
            return res.status(404).json({ error: 'Task not found' });
        }

        await task.destroy(); // Eliminar la tarea 
        // 204: Sin contenido (la operación se realizó con éxito, pero no hay respuesta que enviar)
        res.status(204).send();
    } catch (error) {
        // 500: Error interno del servidor
        res.status(500).json({ error: error.message });
    }
}