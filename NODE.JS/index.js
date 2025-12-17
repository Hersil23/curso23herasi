import express, { json } from 'express'; //importamos express
import connection from './config/db.js'; //importar la conexion a la base de datos
import testingRoutes from './routes/testing.routes.js'; //importar las rutas de testing
import userRoutes from './routes/users.routes.js'; //importar las rutas de usuarios

const app = express(); // Crear el servidor ejecutando express
const port = 3000;//crear un puerto
app.use(json());// Middleware para parsear JSON

// Conectar a la base de datos
connection.then(() => {
    console.log('Conectado a la base de datos MongoDB');
}).catch((error) => {
    console.error('Error al conectar a la base de datos MongoDB:', error);
});

// Rutas
app.use('/api', testingRoutes); // Usar las rutas de testing
app.use('/api/users', userRoutes); // Usar las rutas de usuarios







//iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});