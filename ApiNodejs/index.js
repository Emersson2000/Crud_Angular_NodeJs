require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

// Express
const app = express();

// Admitir
app.use(express.json())

// Config
app.set('port', port);

// Rutas 
app.use('/api', require('./rutas'));

// Iniciar express
app.listen(app.get('port'), error => {
    if(error) {
        console.log(`Error al iniciar el servidor: ${error}`);
    } else {
        console.log(`Servidor iniciado en el puerto: ${port}`);
    }
});