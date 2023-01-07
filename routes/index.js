const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Ariel Rojas');
});

routes.get('/test', (req, res) => {
    res.send('Karina Rojas');
});

module.exports = routes;