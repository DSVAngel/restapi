const cors = require('cors');
const express = require('express');
const routes = require('../routes');
const path = require('path');

// Crear servidor primero
const server = express();

// Configurar middleware
server.use(cors());
server.options('*', cors());
server.use(express.json());

// Archivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

// Rutas de la API
server.use('/api', routes);

// Ruta para la página de administración
server.get('/admin/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = server;