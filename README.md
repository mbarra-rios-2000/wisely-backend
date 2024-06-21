# Backend de Gestión de Tareas

Este proyecto es el backend de una aplicación de gestión de tareas desarrollado con Node.js, Express y Sequelize.

## Requisitos

- Node.js
- MySQL

## Configuración

1. **Crear la Base de Datos**

   Antes de configurar el proyecto, asegúrate de tener MySQL instalado y crea una base de datos con las siguientes credenciales:

   - **Host:** localhost
   - **Usuario:** todolist_user
   - **Contraseña:** X2#o5aqLtR@
   - **Nombre de la Base de Datos:** todolist

   Puedes crear la base de datos y el usuario ejecutando los siguientes comandos en MySQL:

    ```sql
    CREATE DATABASE todolist;
    CREATE USER 'todolist_user'@'localhost' IDENTIFIED BY 'X2#o5aqLtR@';
    GRANT ALL PRIVILEGES ON todolist.* TO 'todolist_user'@'localhost';
    FLUSH PRIVILEGES;
    ```

2. **Clona el repositorio y navega al directorio del backend:**

    ```bash
    git clone <URL_DEL_REPOSITORIO_BACKEND>
    cd backend
    ```

3. **Instala las dependencias:**

    ```bash
    npm install
    ```

4. **Crea un archivo `.env` en el directorio raíz del backend con el siguiente contenido:**

    ```env
    DB_HOST=localhost
    DB_USER=todolist_user
    DB_PASSWORD="X2#o5aqLtR@"
    DB_NAME=todolist
    ```

5. **Inicia el servidor:**

    ```bash
    npm start
    ```

## Uso

El servidor estará disponible en `http://localhost:3000`.

### Endpoints de la API

- `GET /tasks`: Obtener todas las tareas.
- `POST /tasks`: Crear una nueva tarea.
- `PUT /tasks/:id`: Actualizar una tarea existente.
- `DELETE /tasks/:id`: Eliminar una tarea.

## Estructura del Proyecto

```plaintext
backend/
├── controllers/
│   └── taskController.js
├── models/
│   └── task.js
├── routes/
│   └── taskRoutes.js
├── config/
│   └── database.js
├── app.js
└── .env