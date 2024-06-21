const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de tareas 
app.use('/tasks', taskRoutes);

// Sincronizar modelos con la base de datos y arrancar el servidor 
sequelize.sync().then(() => {
    console.log('Database && tables created!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
