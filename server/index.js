
const cors = require('cors');
const express = require('express');
const routes = require('../routes');

const path = require('path');

server.use(express.static(path.join(__dirname, '../public')));

server.get('/admin/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());
server.use('/api', routes);
module.exports = server;
