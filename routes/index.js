const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('<h1>Ariel Rojas</h1>');

})

routes.get('/test', (req, res) => {
    res.send('<h1>Ariel Rojas</h1>');

})

module.exports = routes;